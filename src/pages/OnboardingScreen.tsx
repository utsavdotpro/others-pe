import Button from "@elements/Button";
import Text from "@elements/Text";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";

const OnboardingScreen: React.FC = () => {
  return (
    <Screen title="Onboarding" safeArea={false}>
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

        <Button className="mt-10 mb-8">Get Started</Button>
      </Container>
    </Screen>
  );
};

export default OnboardingScreen;
