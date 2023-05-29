import { Component } from "@appTypes/.";
import Text from "@elements/Text";
import { CurrencyRupeeIcon, TrashIcon } from "@heroicons/react/24/outline";
import ListItem from "@layouts/ListItem";

type Props = {
  label: string;
  time: string;
  amount: number;
};

const HistoryItem: Component<Props> = ({ label, time, amount }) => {
  return (
    <ListItem
      Icon={CurrencyRupeeIcon}
      RightContent={
        <Text className="text-xs">
          - ₹
          {new Intl.NumberFormat("en-IN", {
            maximumSignificantDigits: 3,
          }).format(amount)}
        </Text>
      }
      className="font-medium"
    >
      <Text className="text-xs" block>
        {label}
      </Text>

      <Text className="text-gray-500 text-xxs" block>
        {time}
      </Text>
    </ListItem>
  );
};

export default HistoryItem;
