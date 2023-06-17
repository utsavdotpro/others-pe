import { Component } from "@appTypes/.";
import Container from "@layouts/Container";
import Text from "@elements/Text";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import cx from "clsx";
import useRouter from "@hooks/use-router";
import { Platform } from "@lib/platform";
import { AnalyticsEvent } from "@lib/amplitude";

type Props = {
  title?: string;
  subtitle?: string;
  topSpacing?: boolean;
  bottomSpacing?: boolean;
  RightContent?: JSX.Element;
};

const Toolbar: Component<Props> = ({
  title,
  subtitle,
  className,
  topSpacing = true,
  bottomSpacing = true,
  RightContent,
}) => {
  const { goBack, canGoBack } = useRouter();

  return (
    <Container
      className={cx(
        "flex items-center relative",
        topSpacing && (Platform.isWeb ? "pt-9" : "pt-4"),
        { "pb-6": bottomSpacing },
        className
      )}
    >
      {canGoBack() && (
        <ArrowLeftIcon
          className="absolute left-0 w-5 h-5 ml-5 font-bold cursor-pointer"
          onClick={() => {
            new AnalyticsEvent("ToolbarBackButton").trackClick();
            goBack();
          }}
        />
      )}

      <div className="flex-1 text-center">
        <Text className="text-2xl font-semibold" block bold>
          {title}
        </Text>

        <Text className="text-xs">{subtitle}</Text>
      </div>

      {RightContent && <div>{RightContent}</div>}
    </Container>
  );
};

export default Toolbar;
