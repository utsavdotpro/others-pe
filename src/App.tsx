import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import AddUPIScreen from "@pages/AddUPIScreen";
import HistoryScreen from "@pages/HistoryScreen";
import HomeScreen from "@pages/HomeScreen";
import OnboardingScreen from "@pages/OnboardingScreen";
import PaymentCompleteScreen from "@pages/PaymentCompleteScreen";
import PeopleScreen from "@pages/PeopleScreen";
import RequestPaymentScreen from "@pages/RequestPaymentScreen";
import { Redirect, Route } from "react-router-dom";

import "./App.css";
// Core CSS required for Ionic components to work properly
import "@ionic/react/css/core.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/onboarding">
          <OnboardingScreen />
        </Route>
        <Route exact path="/add-upi">
          <AddUPIScreen />
        </Route>
        <Route exact path="/home">
          <HomeScreen />
        </Route>
        <Route exact path="/history">
          <HistoryScreen />
        </Route>
        <Route exact path="/people">
          <PeopleScreen />
        </Route>
        <Route exact path="/payment/request">
          <RequestPaymentScreen />
        </Route>
        <Route exact path="/payment/complete">
          <PaymentCompleteScreen />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
