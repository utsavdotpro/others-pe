import { Component } from "@appTypes/.";
import Toolbar from "@components/Toolbar";
import Button from "@elements/Button";
import Image from "@elements/Image";
import Text from "@elements/Text";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";
import { AnalyticsEvent } from "@lib/amplitude";
import { formatAmount } from "@utils/.";
import cx from "clsx";
import { useEffect } from "react";

const mockProps = {
  payerUPIId: "klprashant@icici",
  recipientUPIId: "utsav.pro",
  amount: 50000,
};

const UserImage: Component<{ upiId: string }> = ({ className, upiId }) => (
  <Image
    src={`https://api.dicebear.com/6.x/initials/svg?seed=${upiId}&radius=50&fontFamily=Tahoma&fontSize=40&fontWeight=500`}
    alt="recipient"
    className={cx("w-20 h-20 rounded-full", className)}
  />
);

// NOTE: Unused screen
const PaymentCompleteScreen: React.FC = () => {
  useEffect(() => {
    new AnalyticsEvent("PaymentCompleteScreen").trackLaunch();
  }, []);
  
  return (
    <Screen title="Payment Complete">
      <Toolbar title="Payment Details" />

      {/* 92px: space from the top with Toolbar */}
      <Container className="flex flex-col items-center min-h-[calc(100vh-92px-env(safe-area-inset-top))] text-center pb-7">
        <div className="flex mb-6">
          <UserImage className="opacity-80" upiId={mockProps.recipientUPIId} />
          <UserImage className="z-50 -ml-6" upiId={mockProps.payerUPIId} />
        </div>

        <Text>Requested payment to</Text>
        <Text className="mt-2.5">{mockProps.recipientUPIId}</Text>

        <Text className="my-5 text-4xl">{formatAmount(mockProps.amount)}</Text>

        <Text>from</Text>
        <Text>{mockProps.payerUPIId}</Text>

        <div className="flex-1" />

        <Text className="mx-9">
          Ask them to open their UPI app to approve the payment request within
          300 seconds
        </Text>

        <div className="flex-1" />

        <Button.Outline className="w-full">Call your friend</Button.Outline>

        <Button className="w-full mt-4">Confirm Payment</Button>
      </Container>
    </Screen>
  );
};

export default PaymentCompleteScreen;
