import Toolbar from "@components/Toolbar";
import UPIItem from "@components/UPIItem";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";

const mockUPIList = [
  { upiId: "sannan@ybl" },
  { upiId: "priya@ybl" },
  { upiId: "raj@ybl" },
];

const PeopleScreen: React.FC = () => {
  return (
    <Screen title="People">
      <Toolbar title="People" subtitle="All your UPI Ids" />

      <Container className="grid grid-cols-1 gap-2">
        {mockUPIList.map((item) => (
          <UPIItem {...item} key={item.upiId} />
        ))}
      </Container>
    </Screen>
  );
};

export default PeopleScreen;
