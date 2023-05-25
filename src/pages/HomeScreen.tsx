import { UserPlusIcon } from "@heroicons/react/24/outline";

import Header from "@components/Header";
import Button from "@elements/Button";
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

      <Section
        title="People"
        className="mb-8"
        action={{ text: "See All", fn: () => {} }}
      >
        <Section.EmptyText className="mb-10 mt-14">
          *Cricket noises*
          <br />
          <br />
          Need help making some friends?
        </Section.EmptyText>

        <Button.Primary Icon={UserPlusIcon} className="!py-3 !px-7 mx-auto">
          Add a UPI ID
        </Button.Primary>

        {/* {mockList.map((item) => (
          <UPIItem {...item} key={item.upiId} />
        ))} */}
      </Section>

      <Section title="History" action={{ text: "See All", fn: () => {} }}>
        <Section.EmptyText className="mt-14">
          Your recent transaction will show up here,
          <br />
          unlike your incognito history :)
        </Section.EmptyText>
      </Section>
    </Screen>
  );
};

export default HomeScreen;
