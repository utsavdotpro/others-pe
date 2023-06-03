import Toolbar from "@components/Toolbar";
import Text from "@elements/Text";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";
import MoneyInput from "@modules/request-payment/MoneyInput";

const RequestPaymentScreen: React.FC = () => {
  return (
    <Screen title="Request Payment" className="h-full" safeArea={false}>
      <Toolbar className="bg-primary-500" />

      <Container className="h-full text-center bg-primary-500">
        <div className="flex items-center justify-center">
          <Text className="text-xl">Utsav Pro</Text>

          {/* TODO: replace icon with Figma */}
          <CheckCircleIcon className="w-6 h-6 text-white ms-1.5" />
        </div>

        <Text className="mt-1.5" block>
          utsavpro@icici
        </Text>
        <Text block>Banking name: Utsav Barnwal</Text>

        <MoneyInput className="mt-6" />
      </Container>
    </Screen>
  );
};

export default RequestPaymentScreen;
