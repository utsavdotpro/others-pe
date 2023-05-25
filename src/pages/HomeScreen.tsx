import Header from "@components/Header";
import UPIItem from "@components/UPIItem";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";
import Section from "@layouts/Section";

const mockList = [
  {
    upiId: "sannan@ybl",
  },
];

const HomeScreen: React.FC = () => {
  return (
    <Screen title="Home">
      <Header title="Welcome to OthersPe!" subtitle="Stuck? Let others pay!" />

      <Section title="People" action={{ text: "See All", fn: () => {} }}>
        {mockList.map((item) => (
          <UPIItem {...item} key={item.upiId} />
        ))}
      </Section>
    </Screen>
  );
};

export default HomeScreen;
