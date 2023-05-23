import UPIItem from "@components/UPIItem";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";

const mockList = [
  {
    upiId: "sannan@ybl",
  },
];

const HomeScreen: React.FC = () => {
  return (
    <Screen title="Your UPI" subtitle="Works with all the UPI IDs" toolbar>
      <Container>
        {mockList.map((item) => (
          <UPIItem {...item} key={item.upiId} />
        ))}
      </Container>
    </Screen>
  );
};

export default HomeScreen;
