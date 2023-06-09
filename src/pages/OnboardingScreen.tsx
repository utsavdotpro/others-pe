import Button from "@elements/Button";
import Text from "@elements/Text";
import useRouter from "@hooks/use-router";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";

const OnboardingScreen: React.FC = () => {
  const { replace } = useRouter();

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
        <Button onClick={() => replace("/add-upi")} className="mt-10 mb-8">
          Get Started
        </Button>
      </Container>
    </Screen>
  );
};

export default OnboardingScreen;
