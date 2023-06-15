import { UPI } from "@appTypes/.";
import { Share } from "@capacitor/share";
import Toolbar from "@components/Toolbar";
import Input from "@elements/Input";
import Text from "@elements/Text";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import useRouter from "@hooks/use-router";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";
import LocalStorage, { StorageItem } from "@lib/localStorage";
import MoneyInput from "@modules/request-payment/MoneyInput";
import RequestSheet from "@modules/request-payment/RequestSheet";
import { generateUPILink } from "@utils/index";
import { useMemo, useRef } from "react";

const RequestPaymentScreen: React.FC = () => {
  const { replace } = useRouter();

  const valueRef = useRef({
    amount: "0",
    note: "",
  });

  const upiData = useMemo(() => {
    const data = LocalStorage.getItem(StorageItem.scannedQRData);

    if (!data) return null;

    const obj = Object.fromEntries(
      new URLSearchParams(data.replace("upi://pay?", ""))
    ) as unknown as UPI;

    if (obj.tn) valueRef.current.note = obj.tn;
    if (obj.am) valueRef.current.amount = obj.am.toString();

    return obj;
  }, []);

  if (!upiData) {
    replace("/");
    return null;
  }

  const { pn: payeeName, pa: vpa } = upiData;

  const onRequestPayment = async () => {
    if (!valueRef.current.amount || valueRef.current.amount === "0") {
      alert("Please enter an amount");
      return;
    }

    const upi: UPI = {
      ...upiData,
      am: Number(valueRef.current.amount),
      tn: valueRef.current.note,
    };

    await Share.share({
      title: "Share payment link",
      text: `Hey, can you please clear this payment of *₹${upi.am}* for me?\n\n`,
      url: generateUPILink(upi),
      dialogTitle: "Share payment link",
    });
  };

  return (
    <Screen
      title="Request Payment"
      className="h-full"
      contentClassName="relative"
      safeArea={false}
    >
      <div className="bg-primary-500 pt-safe">
        <Toolbar />
      </div>

      <Container className="h-full text-center bg-primary-500">
        <div className="flex items-center justify-center">
          {payeeName && <Text className="text-xl">{payeeName}</Text>}

          {/* TODO: replace icon with Figma */}
          <CheckCircleIcon className="w-6 h-6 text-white ms-1.5" />
        </div>

        <Text className="mt-1.5" block>
          {vpa}
        </Text>
        {/* <Text block>Banking name: Utsav Barnwal</Text> */}

        <MoneyInput
          className="mt-4"
          defaultValue={valueRef.current.amount}
          onValueChange={(value) => (valueRef.current.amount = value)}
        />

        <Input
          defaultValue={valueRef.current.note}
          onValueChange={(value) => (valueRef.current.note = value)}
          className="bg-white border-none !rounded-2xl text-xs inline-block mx-auto"
          inputClassName="min-w-[10ch] text-center"
          placeholder="Add a note"
          errorText="Enter a correct UPI Id"
          dynamicWidth
        />
      </Container>

      <RequestSheet
        onRequestPayment={onRequestPayment}
        className="fixed bottom-0 z-50"
      />
    </Screen>
  );
};

export default RequestPaymentScreen;
