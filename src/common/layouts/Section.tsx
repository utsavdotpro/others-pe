import { Component } from "@appTypes/.";
import Text from "@elements/Text";
import Container from "@layouts/Container";
import cx from "clsx";

type Props = {
  title: string;
  action?: {
    text: string;
    fn: () => void;
  };
};

type SubComponent = {
  EmptyText: Component<{ title?: string }>;
};

const Section: Component<Props> & SubComponent = ({
  title,
  action,
  children,
  className,
}) => {
  return (
    <Container className={className}>
      <div className="flex items-center justify-between mb-1.5">
        <Text className="text-xl font-medium">{title}</Text>

        {action && (
          <Text className="text-gray-500 cursor-pointer" onClick={action.fn}>
            {action.text}
          </Text>
        )}
      </div>

      {children}
    </Container>
  );
};

Section.EmptyText = ({ title, className, children }) => {
  return (
    <div
      className={cx(
        "flex flex-col items-center justify-center text-center",
        className
      )}
    >
      {title && (
        <Text block className="mb-3 font-bold">
          {title}
        </Text>
      )}

      <Text block className="text-xs">
        {children}
      </Text>
    </div>
  );
};

export default Section;
