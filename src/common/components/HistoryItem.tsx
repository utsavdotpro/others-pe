import { Component } from "@appTypes/.";
import { PaymentHistory } from "@appTypes/payment-history";
import Text from "@elements/Text";
import { CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import ListItem from "@layouts/ListItem";
import { formatAmount } from "@utils/.";

const HistoryItem: Component<PaymentHistory> = ({ vpa, timestamp, amount }) => {
  return (
    <ListItem
      Icon={CurrencyRupeeIcon}
      RightContent={<Text className="text-xs">- {formatAmount(amount)}</Text>}
      className="font-medium"
    >
      <Text className="text-xs" block>
        {vpa}
      </Text>

      <Text className="text-gray-500 text-xxs" block>
        {new Date(timestamp).toLocaleString("en-IN", {
          dateStyle: "full",
          timeStyle: "short",
        })}
      </Text>
    </ListItem>
  );
};

export default HistoryItem;
