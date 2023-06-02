import HistoryItem from "@components/HistoryItem";
import Toolbar from "@components/Toolbar";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";

const mockHistoryList = [
  { label: "Sannan", time: "Today, 11:30am", amount: 500000 },
  { label: "Priya", time: "Yesterday, 11:30pm", amount: 500 },
  { label: "Raj", time: "March 20, 10:25pm", amount: 50000 },
];

const HistoryScreen: React.FC = () => {
  return (
    <Screen title="History">
      <Toolbar title="History" subtitle="Payment History" />

      <Container className="grid grid-cols-1 gap-2">
        {mockHistoryList.map((item) => (
          <HistoryItem {...item} key={item.label} />
        ))}
      </Container>
    </Screen>
  );
};

export default HistoryScreen;
