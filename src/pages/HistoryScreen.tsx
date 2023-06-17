import { PaymentHistory } from "@appTypes/payment-history";
import HistoryItem from "@components/HistoryItem";
import Toolbar from "@components/Toolbar";
import Container from "@layouts/Container";
import Screen from "@layouts/Screen";
import { AnalyticsEvent } from "@lib/amplitude";
import LocalStorage, { StorageItem } from "@lib/local-storage";
import { useEffect, useMemo } from "react";

const HistoryScreen: React.FC = () => {
  const payments = useMemo<PaymentHistory[]>(
    () =>
      LocalStorage.getArray<PaymentHistory>(
        StorageItem.paymentHistory
      ).reverse(),
    []
  );

  useEffect(() => {
    new AnalyticsEvent(AnalyticsEvent.Launched).addTag("HistoryScreen").track();
  }, []);

  return (
    <Screen title="History">
      <Toolbar title="History" subtitle="Payment History" />

      <Container className="grid grid-cols-1 gap-2">
        {payments.map((item) => (
          <HistoryItem {...item} key={item.timestamp} />
        ))}
      </Container>
    </Screen>
  );
};

export default HistoryScreen;
