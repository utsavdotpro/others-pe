import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import HomeScreen from "@pages/HomeScreen";
import OnboardingScreen from "@pages/OnboardingScreen";
import { Redirect, Route } from "react-router-dom";

import "./App.css";
// Core CSS required for Ionic components to work properly
import "@ionic/react/css/core.css";
import AddUPIScreen from "@pages/AddUPIScreen";

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
        {/* TODO: change default path to onboarding */}
        <Route exact path="/">
          <Redirect to="/add-upi" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
