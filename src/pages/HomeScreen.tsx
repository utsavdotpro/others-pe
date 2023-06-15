import { QrCodeIcon } from "@heroicons/react/24/outline";

import Header from "@components/Header";
import Button from "@elements/Button";
import Screen from "@layouts/Screen";
import Section from "@layouts/Section";
import Container from "@layouts/Container";
import HistoryItem from "@components/HistoryItem";
import useRouter from "@hooks/use-router";
import { useEffect } from "react";
import LocalStorage, { StorageItem } from "@lib/local-storage";
import screen from "@constants/screens";
import { PaymentHistory } from "@appTypes/payment-history";

// const mockUPIList = [
//   { upiId: "sannan@ybl" },
//   { upiId: "priya@ybl" },
//   { upiId: "raj@ybl" },
// ];

// const EmptyUPIList: Component = () => (
//   <>
//     <Section.EmptyText className="mb-10 mt-14">
//       *Cricket noises*
//       <br />
//       <br />
//       Need help making some friends?
//     </Section.EmptyText>

//     <Button.Primary Icon={UserPlusIcon} className="!py-3 !px-7 mx-auto">
//       Add a UPI ID
//     </Button.Primary>
//   </>
// );

const HomeScreen: React.FC = () => {
  const { push, replace } = useRouter();

  const historyItems = LocalStorage.getArray<PaymentHistory>(
    StorageItem.paymentHistory
  )
    .reverse()
    .slice(0, 6);

  useEffect(() => {
    if (!LocalStorage.getBoolean(StorageItem.isOnboardingComplete))
      replace("/onboarding");
  }, []);

  return (
    <Screen
      title="Home"
      contentClassName="relative"
      className="pb-24"
      safeArea={false}
    >
      <Header title="Welcome to OthersPe!" subtitle="Stuck? Let others pay!" />

      {/* <Section
        title="People"
        className="mb-8"
        action={{ text: "See All", fn: () => push(screen.people.path) }}
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
      </Section> */}

      <Section
        title="History"
        action={{ text: "See All", fn: () => push(screen.history.path) }}
      >
        {!historyItems.length ? (
          <Section.EmptyText className="mt-14">
            Your recent transaction will show up here,
            <br />
            unlike your incognito history :)
          </Section.EmptyText>
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {historyItems.map((item) => (
              <HistoryItem {...item} key={item.timestamp} />
            ))}
          </div>
        )}
      </Section>

      <Container className="fixed bottom-0 mb-8" widthFullScreen>
        <Button
          Icon={QrCodeIcon}
          className="w-full"
          iconClassName="text-primary-500"
          onClick={() => push(screen.scanner.path)}
        >
          Scan and Request
        </Button>
      </Container>
    </Screen>
  );
};

export default HomeScreen;
