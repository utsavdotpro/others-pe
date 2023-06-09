import Toolbar from "@components/Toolbar";
import Button from "@elements/Button";
import Text from "@elements/Text";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";
import { formatAmount } from "@utils/.";

const mockProps = {
  payerUPIId: "utsav@ybl",
  recipientUPIId: "sannan@ybl",
  amount: 50000,
};

const PaymentCompleteScreen: React.FC = () => {
  return (
    <Screen title="Payment Complete">
      <Toolbar title="Payment Details" />

      {/* 92px: space from the top with Toolbar */}
      <Container className="flex flex-col items-center min-h-[calc(100vh-92px-env(safe-area-inset-top))] text-center pb-7">
        <Text>Request payment to</Text>
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
