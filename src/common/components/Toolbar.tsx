import { Component } from "@appTypes/.";
import Container from "@layouts/Container";
import Text from "@elements/Text";
import cx from "clsx";

type Props = {
  title?: string;
  subtitle?: string;
};

const Toolbar: Component<Props> = ({ title, subtitle, className }) => {
  return (
    <Container className={cx("text-center", className)}>
      <Text className="text-2xl font-semibold" block bold>
        {title}
      </Text>

      <Text className="text-xs">{subtitle}</Text>
    </Container>
  );
};

export default Toolbar;
