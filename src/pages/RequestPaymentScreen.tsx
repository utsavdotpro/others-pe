import { Component, UPI } from "@appTypes/.";
import { Share } from "@capacitor/share";
import Toolbar from "@components/Toolbar";
import Input from "@elements/Input";
import Text from "@elements/Text";
import { CheckIcon } from "@heroicons/react/24/solid";
import useRouter from "@hooks/use-router";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";
import LocalStorage, { StorageItem } from "@lib/local-storage";
import MoneyInput from "@modules/request-payment/MoneyInput";
import RequestSheet from "@modules/request-payment/RequestSheet";
import { debounce, generateShareText } from "@utils/.";
import { useEffect, useMemo, useRef } from "react";
import Image from "@elements/Image";
import cx from "clsx";
import { PaymentHistory } from "@appTypes/payment-history";
import { AnalyticsEvent } from "@lib/amplitude";

const UserImage: Component<{ upiId: string }> = ({ className, upiId }) => (
  <Image
    src={`https://api.dicebear.com/6.x/initials/svg?seed=${upiId}&radius=50&fontFamily=Tahoma&fontSize=40&fontWeight=500`}
    alt="recipient"
    className={cx("w-20 h-20 rounded-full", className)}
  />
);

const trackAmountChange = debounce((value: string) => {
  new AnalyticsEvent("AmountInput").add("value", value).trackChange();
}, 300);

const trackNoteChange = debounce((value: string) => {
  new AnalyticsEvent("NoteInput").add("value", value).trackChange();
}, 300);

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

  useEffect(() => {
    new AnalyticsEvent("RequestPaymentScreen").trackLaunch();
  }, []);

  if (!upiData) {
    replace("/");
    return null;
  }

  const { pn: payeeName, pa: vpa } = upiData;

  const savePaymentHistory = (upi: UPI) => {
    LocalStorage.pushItem<PaymentHistory>(StorageItem.paymentHistory, {
      vpa: upi.pa,
      amount: upi.am,
      note: upi.tn,
      timestamp: new Date().toISOString(),
    });
  };

  const onRequestPayment = async () => {
    if (!valueRef.current.amount || valueRef.current.amount === "0") {
      new AnalyticsEvent("RequestPaymentButton")
        .add("processed", false)
        .trackClick();

      alert("Please enter an amount!");
      return;
    }

    if ((await Share.canShare()).value === false) {
      new AnalyticsEvent("RequestPaymentButton")
        .add("processed", false)
        .add("error", "share_not_supported")
        .trackClick();

      alert("Sorry, share is not supported on this device!");
      return;
    }

    new AnalyticsEvent("RequestPaymentButton")
      .add("processed", true)
      .trackClick();

    const upi: UPI = {
      ...upiData,
      am: Number(valueRef.current.amount),
      tn: valueRef.current.note,
    };

    new AnalyticsEvent("RequestPaymentButton")
      .add("processed", true)
      .add("amount", upi.am)
      .trackClick();

    savePaymentHistory(upi);

    await Share.share({
      title: "Share payment link",
      text: generateShareText(upi),
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
        <UserImage upiId={vpa} className="mx-auto mb-1.5" />

        <div className="flex items-center justify-center">
          {payeeName && <Text className="text-xl">{payeeName}</Text>}

          <CheckIcon className="w-5 h-5 text-black ms-1.5 bg-white rounded-full p-1" />
        </div>

        <Text className="mt-1.5" block>
          {vpa}
        </Text>
        {/* <Text block>Banking name: Utsav Barnwal</Text> */}

        <MoneyInput
          className="mt-4"
          defaultValue={valueRef.current.amount}
          onValueChange={(value) => {
            trackAmountChange(value);
            valueRef.current.amount = value;
          }}
        />

        <Input
          defaultValue={valueRef.current.note}
          onValueChange={(value) => {
            trackNoteChange(value);
            valueRef.current.note = value;
          }}
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
