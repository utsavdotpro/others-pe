import { UserPlusIcon, QrCodeIcon } from "@heroicons/react/24/outline";
import cx from "clsx";

import Header from "@components/Header";
import Button from "@elements/Button";
import Screen from "@layouts/Screen";
import Section from "@layouts/Section";
import Container from "@layouts/Container";
import type { Component } from "@appTypes/.";
import UPIItem from "@components/UPIItem";
import HistoryItem from "@components/HistoryItem";
import { Platform } from "@lib/platform";

const mockUPIList = [
  { upiId: "sannan@ybl" },
  { upiId: "priya@ybl" },
  { upiId: "raj@ybl" },
];

const mockHistoryList = [
  { label: "Sannan", time: "Today, 11:30am", amount: 500000 },
  { label: "Priya", time: "Yesterday, 11:30pm", amount: 500 },
  { label: "Raj", time: "March 20, 10:25pm", amount: 50000 },
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
    <Screen
      title="Home"
      contentClassName="relative"
      className="pb-24"
      safeArea={false}
    >
      <Header title="Welcome to OthersPe!" subtitle="Stuck? Let others pay!" />

      <Section
        title="People"
        className="mb-8"
        action={{ text: "See All", fn: () => {} }}
      >
        {!mockUPIList.length ? (
          <EmptyUPIList />
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {mockUPIList.map((item) => (
              <UPIItem {...item} key={item.upiId} />
            ))}
          </div>
        )}
      </Section>

      <Section title="History" action={{ text: "See All", fn: () => {} }}>
        {!mockHistoryList.length ? (
          <Section.EmptyText className="mt-14">
            Your recent transaction will show up here,
            <br />
            unlike your incognito history :)
          </Section.EmptyText>
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {mockHistoryList.map((item) => (
              <HistoryItem {...item} key={item.label} />
            ))}
          </div>
        )}
      </Section>

      <Container className="fixed bottom-0 mb-8">
        <Button
          Icon={QrCodeIcon}
          className="w-full"
          iconClassName="text-primary-500"
        >
          Scan and Request
        </Button>
      </Container>
    </Screen>
  );
};

export default HomeScreen;
