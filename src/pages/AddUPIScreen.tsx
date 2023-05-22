import Button from "@elements/Button";
import Input from "@elements/Input";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";
import { validateUPIId } from "@utils/index";
import { useState } from "react";

const AddUPIScreen: React.FC = () => {
  const [upiId, setUpiId] = useState("");
  const [error, setError] = useState(false);

  const processUpiIdChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUpiId(value);

    setError(!validateUPIId(value));
  };

  return (
    <Screen title="Add new UPI Id" subtitle="Your friends UPI Id" toolbar>
      <Container>
        <Input
          value={upiId}
          onChange={processUpiIdChange}
          placeholder="90876543@okicici"
          error={error}
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
