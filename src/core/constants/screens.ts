import AddUPIScreen from "@pages/AddUPIScreen";
import HistoryScreen from "@pages/HistoryScreen";
import HomeScreen from "@pages/HomeScreen";
import OnboardingScreen from "@pages/OnboardingScreen";
import PaymentCompleteScreen from "@pages/PaymentCompleteScreen";
import PeopleScreen from "@pages/PeopleScreen";
import RequestPaymentScreen from "@pages/RequestPaymentScreen";

export const screen = {
  home: {
    name: "home",
    path: "/",
    Component: HomeScreen,
  },
  onboarding: {
    name: "onboarding",
    path: "/onboarding",
    Component: OnboardingScreen,
  },
  addUPI: {
    name: "add-upi",
    path: "/add-upi",
    Component: AddUPIScreen,
  },
  history: {
    name: "history",
    path: "/history",
    Component: HistoryScreen,
  },
  people: {
    name: "people",
    path: "/people",
    Component: PeopleScreen,
  },
  requestPayment: {
    name: "payment/request",
    path: "/payment/request",
    Component: RequestPaymentScreen,
  },
  paymentComplete: {
    name: "payment/complete",
    path: "/payment/complete",
    Component: PaymentCompleteScreen,
  },
};
