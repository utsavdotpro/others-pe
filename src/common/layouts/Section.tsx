import React from "react";
import { Component } from "@appTypes/.";
import Text from "@elements/Text";
import Container from "@layouts/Container";

type Props = {
  title: string;
  action?: {
    text: string;
    fn: () => void;
  };
};

const Section: Component<Props> = ({ title, action, children }) => {
  return (
    <Container>
      <div className="flex items-center justify-between mb-1.5">
        <Text className="text-xl font-medium">{title}</Text>

        {action && (
          <Text className="text-[#959FA0] cursor-pointer" onClick={action.fn}>
            {action.text}
          </Text>
        )}
      </div>

      {children}
    </Container>
  );
};

export default Section;
