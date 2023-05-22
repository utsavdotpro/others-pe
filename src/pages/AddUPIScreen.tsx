import Button from "@elements/Button";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";

const AddUPIScreen: React.FC = () => {
  return (
    <Screen title="Add UPI Id" subtitle="Your friends UPI ID" toolbar>
      <Container>
        <Button className="w-full mt-9" disabled>
          Add UPI ID
        </Button>
      </Container>
    </Screen>
  );
};

export default AddUPIScreen;
