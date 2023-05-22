import Button from "@elements/Button";
import Input from "@elements/Input";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";

const AddUPIScreen: React.FC = () => {
  return (
    <Screen title="Add new UPI Id" subtitle="Your friends UPI Id" toolbar>
      <Container>
        <Input
          placeholder="90876543@okicici"
          errorText="Enter a correct UPI Id"
        />

        <Button className="w-full mt-9" disabled>
          Add UPI ID
        </Button>
      </Container>
    </Screen>
  );
};

export default AddUPIScreen;
