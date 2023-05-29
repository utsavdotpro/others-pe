import { UserPlusIcon, QrCodeIcon } from "@heroicons/react/24/outline";

import Header from "@components/Header";
import Button from "@elements/Button";
import Screen from "@layouts/Screen";
import Section from "@layouts/Section";
import Container from "@layouts/Container";
import { Component } from "@appTypes/.";
import UPIItem from "@components/UPIItem";

const mockList = [
  { upiId: "sannan@ybl" },
  { upiId: "priya@ybl" },
  { upiId: "raj@ybl" },
];

const EmptyUPIList: Component = () => (
  <>
    <Section.EmptyText className="mb-10 mt-14">
      *Cricket noises*
      <br />
      <br />
      Need help making some friends?
    </Section.EmptyText>

    <Button.Primary Icon={UserPlusIcon} className="!py-3 !px-7 mx-auto">
      Add a UPI ID
    </Button.Primary>
  </>
);

const HomeScreen: React.FC = () => {
  return (
    <Screen title="Home" className="relative">
      <Header title="Welcome to OthersPe!" subtitle="Stuck? Let others pay!" />

      <Section
        title="People"
        className="mb-8"
        action={{ text: "See All", fn: () => {} }}
      >
        {!mockList.length && <EmptyUPIList />}

        <div className="grid grid-cols-1 gap-2">
          {mockList.map((item) => (
            <UPIItem {...item} key={item.upiId} />
          ))}
        </div>
      </Section>

      <Section title="History" action={{ text: "See All", fn: () => {} }}>
        <Section.EmptyText className="mt-14">
          Your recent transaction will show up here,
          <br />
          unlike your incognito history :)
        </Section.EmptyText>
      </Section>

      <Container className="absolute bottom-0 mb-8">
        <Button
          Icon={QrCodeIcon}
          className="w-full"
          iconClassName="text-primary-500"
        >
          Scan & Pay
        </Button>
      </Container>
    </Screen>
  );
};

export default HomeScreen;
