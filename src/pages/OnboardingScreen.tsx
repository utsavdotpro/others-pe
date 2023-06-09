import Button from "@elements/Button";
import Text from "@elements/Text";
import useRouter from "@hooks/use-router";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";
import LocalStorage, { StorageItem } from "@lib/storage";
import { useEffect } from "react";

const OnboardingScreen: React.FC = () => {
  const { push, replace } = useRouter();

  useEffect(() => {
    if (LocalStorage.getBoolean(StorageItem.isOnboardingComplete))
      replace("/home");
  }, []);

  return (
    <Screen title="Onboarding" safeArea={false} className="h-full">
      <Container className="flex flex-col justify-end h-full text-center bg-primary-500">
        <Text className="text-3xl" bold>
          Scan. Request. <br />
          Get Paid.
        </Text>

        {/* TODO: Adjust the spacing between the text fields */}

        <Text>
          Request payments from your <br />
          friends & family
        </Text>

        {/* TODO: use url path from constant */}
        <Button onClick={() => push("/add-upi")} className="mt-10 mb-8">
          Get Started
        </Button>
      </Container>
    </Screen>
  );
};

export default OnboardingScreen;
