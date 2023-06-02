import { Component } from "@appTypes/.";
import Container from "@layouts/Container";
import Text from "@elements/Text";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import cx from "clsx";
import useRouter from "@hooks/use-router";
import LocalStorage, { StorageItem } from "@lib/storage";
import { useState } from "react";

type Props = {
  title?: string;
  subtitle?: string;
};

const Toolbar: Component<Props> = ({ title, subtitle, className }) => {
  const { goBack, canGoBack } = useRouter();
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(
    LocalStorage.getBoolean(StorageItem.isOnboardingComplete)
  );

  const skipOnboarding = () => {
    LocalStorage.setItem(StorageItem.isOnboardingComplete, "true");
    setIsOnboardingComplete(true);
  };

  return (
    <Container className={cx("flex items-center", className)}>
      {canGoBack() && (
        <ArrowLeftIcon
          className="w-4 h-4 mr-4 font-bold cursor-pointer"
          onClick={() => goBack()}
        />
      )}

      <div className="flex-1 text-center">
        <Text className="text-2xl font-semibold" block bold>
          {title}
        </Text>

        <Text className="text-xs">{subtitle}</Text>
      </div>

      {!isOnboardingComplete && <Text onClick={skipOnboarding}>skip</Text>}
    </Container>
  );
};

export default Toolbar;
