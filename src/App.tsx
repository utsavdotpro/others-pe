import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import HomeScreen from "@pages/HomeScreen";
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
          <HomeScreen />
        </Route>
        <Route exact path="/home">
          <HomeScreen />
        </Route>
        <Route exact path="/">
          <Redirect to="/onboarding" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
