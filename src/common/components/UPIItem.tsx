import { Component } from "@appTypes/.";
import Text from "@elements/Text";

type Props = {
  upiId: string;
};

const UPIItem: Component<Props> = ({ upiId }) => {
  return (
    <div
      className="p-5 pl-4 rounded-2xl"
      style={{
        boxShadow: "0px 0px 3px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Text className="mx-2.5 text-sm">UPIItem</Text>
    </div>
  );
};

export default UPIItem;
