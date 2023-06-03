import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import HomeScreen from "@pages/HomeScreen";
import OnboardingScreen from "@pages/OnboardingScreen";
import { Redirect, Route } from "react-router-dom";
import AddUPIScreen from "@pages/AddUPIScreen";
import HistoryScreen from "@pages/HistoryScreen";
import PeopleScreen from "@pages/PeopleScreen";
import RequestPaymentScreen from "@pages/RequestPaymentScreen";

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
        <Route exact path="/request-payment">
          <RequestPaymentScreen />
        </Route>
        {/* TODO: change default path to onboarding */}
        <Route exact path="/">
          <Redirect to="/onboarding" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
