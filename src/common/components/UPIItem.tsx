import { Component } from "@appTypes/.";
import Text from "@elements/Text";
import { TrashIcon } from "@heroicons/react/24/outline";
import { QrCodeIcon } from "@heroicons/react/24/solid";
import ListItem from "@layouts/ListItem";

type Props = {
  upiId: string;
};

const UPIItem: Component<Props> = ({ upiId }) => {
  return (
    <ListItem
      Icon={QrCodeIcon}
      RightContent={
        <TrashIcon className="w-4 h-4 text-gray-500 cursor-pointer" />
      }
      className="font-medium"
    >
      <Text className="text-sm">{upiId}</Text>
    </ListItem>
  );
};

export default UPIItem;
