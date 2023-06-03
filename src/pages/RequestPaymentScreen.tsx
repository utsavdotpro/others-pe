import Toolbar from "@components/Toolbar";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";

const RequestPaymentScreen: React.FC = () => {
  return (
    <Screen title="Request Payment" className="h-full" safeArea={false}>
      <Toolbar className="bg-primary-500" />

      <Container className="h-full bg-primary-500"></Container>
    </Screen>
  );
};

export default RequestPaymentScreen;
