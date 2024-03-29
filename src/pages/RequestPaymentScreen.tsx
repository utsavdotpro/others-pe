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
import { convertToUPI } from "@utils/upi";
import Section from "@layouts/Section";
import Button from "@elements/Button";
import { trackScanProcess } from "@lib/barcode-scanner";

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

const trackShareProcess = (
  status: string,
  processed: boolean,
  result?: string
) => {
  const event = new AnalyticsEvent("SharePaymentLink")
    .add("status", status)
    .add("processed", processed);

  if (result) event.add("result", result);

  event.trackProcess();
};

const RequestPaymentScreen: React.FC = () => {
  const { goBack } = useRouter();

  const valueRef = useRef({
    amount: "0",
    note: "",
  });

  const upiData = useMemo(() => {
    const data = LocalStorage.getItem(StorageItem.scannedQRData);

    if (!data) return null;

    const upi = convertToUPI(data);

    if (!upi) {
      trackScanProcess("invalid_upi_qr", false);
      return null;
    }

    if (upi.tn) valueRef.current.note = upi.tn;
    if (upi.am) valueRef.current.amount = upi.am.toString();

    return upi;
  }, []);

  useEffect(() => {
    new AnalyticsEvent("RequestPaymentScreen").trackLaunch();
  }, []);

  const { pn: payeeName, pa: vpa } = upiData || {};

  const savePaymentHistory = (upi: UPI) => {
    LocalStorage.pushItem<PaymentHistory>(StorageItem.paymentHistory, {
      vpa: upi.pa,
      amount: upi.am!,
      note: upi.tn,
      timestamp: new Date().toISOString(),
    });
  };

  const processShare = async (upi: UPI) => {
    if ((await Share.canShare()).value === false) {
      trackShareProcess("share_unsupported", false);

      alert("Sorry, share is not supported on this device!");
      return;
    }

    trackShareProcess("started", false);

    const result = await Share.share({
      title: "Share payment link",
      text: generateShareText(upi),
      dialogTitle: "Share payment link",
    });

    if (result.activityType)
      trackShareProcess("success", true, result.activityType);
    else trackShareProcess("canceled", false);
  };

  const onRequestPayment = () => {
    if (!valueRef.current.amount || valueRef.current.amount === "0") {
      new AnalyticsEvent("RequestPaymentButton")
        .add("processed", false)
        .add("status", "incomplete_input")
        .trackClick();

      alert("Please enter an amount!");
      return;
    }

    const upi: UPI = {
      ...upiData!,
      am: Number(valueRef.current.amount),
      tn: valueRef.current.note,
    };

    new AnalyticsEvent("RequestPaymentButton")
      .add("processed", true)
      .add("amount", upi.am)
      .trackClick();

    savePaymentHistory(upi);
    processShare(upi);
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

      {!upiData && (
        <Container className="h-full pt-8 bg-primary-500">
          <Section.EmptyText title="Invalid UPI QR Code">
            Please make sure you have scanned a valid QR code for UPI. If you
            are sure that you have scanned a valid QR code, please try again.
          </Section.EmptyText>

          <Button.Primary
            onClick={() => {
              new AnalyticsEvent("GoBackButton").trackClick();
              goBack();
            }}
            className="mx-auto mt-4"
          >
            Go back
          </Button.Primary>
        </Container>
      )}

      {upiData && (
        <>
          <Container className="h-full text-center bg-primary-500">
            <UserImage upiId={vpa!} className="mx-auto mb-1.5" />

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
        </>
      )}
    </Screen>
  );
};

export default RequestPaymentScreen;
