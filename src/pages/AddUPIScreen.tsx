import Toolbar from "@components/Toolbar";
import Button from "@elements/Button";
import Text from "@elements/Text";
import Input from "@elements/Input";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";
import LocalStorage, { StorageItem } from "@lib/storage";
import { debounce, validateUPIId } from "@utils/index";
import { useRef, useState } from "react";
import useRouter from "@hooks/use-router";

const validateDebounce = debounce(
  (value: string, setErrorFn: React.Dispatch<React.SetStateAction<boolean>>) =>
    setErrorFn(!validateUPIId(value)),
  200
);

const AddUPIScreen: React.FC = () => {
  const { replace } = useRouter();

  const [upiId, setUpiId] = useState("");
  const [error, setError] = useState(false);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(
    LocalStorage.getBoolean(StorageItem.isOnboardingComplete)
  );

  // This is to disable the button while the user is typing the first character. The validation is debounced so the button get enabled for a split second
  const disabledWhileFirstChange = useRef(true);

  const processUpiIdChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUpiId(value);

    validateDebounce(value, (valid: boolean) => {
      disabledWhileFirstChange.current = false;
      setError(valid);
    });
  };

  const skipOnboarding = () => {
    LocalStorage.setItem(StorageItem.isOnboardingComplete, "true");
    setIsOnboardingComplete(true);

    // TODO: use url path from constant
    replace("/home");
  };

  return (
    <Screen title="Add UPI Id">
      <Toolbar
        title="Add new UPI Id"
        subtitle="Your friends UPI Id"
        RightContent={
          <>
            {!isOnboardingComplete && (
              <Text onClick={skipOnboarding}>skip</Text>
            )}
          </>
        }
      />

      <Container>
        <Input
          value={upiId}
          onChange={processUpiIdChange}
          placeholder="90876543@okicici"
          error={error}
          errorText="Enter a correct UPI Id"
        />

        <Button
          className="w-full mt-9"
          disabled={error || disabledWhileFirstChange.current}
        >
          Add UPI ID
        </Button>
      </Container>
    </Screen>
  );
};

export default AddUPIScreen;
