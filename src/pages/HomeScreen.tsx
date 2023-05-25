import Header from "@components/Header";
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
    <Screen title="Home">
      <Header title="Welcome to OthersPe!" subtitle="Stuck? Let others pay!" />
      <Container>
        {mockList.map((item) => (
          <UPIItem {...item} key={item.upiId} />
        ))}
      </Container>
    </Screen>
  );
};

export default HomeScreen;
