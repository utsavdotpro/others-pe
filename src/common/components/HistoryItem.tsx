import { Component } from "@appTypes/.";
import Text from "@elements/Text";
import { CurrencyRupeeIcon, TrashIcon } from "@heroicons/react/24/outline";
import ListItem from "@layouts/ListItem";
import { formatAmount } from "@utils/.";

type Props = {
  label: string;
  time: string;
  amount: number;
};

const HistoryItem: Component<Props> = ({ label, time, amount }) => {
  return (
    <ListItem
      Icon={CurrencyRupeeIcon}
      RightContent={<Text className="text-xs">- {formatAmount(amount)}</Text>}
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
