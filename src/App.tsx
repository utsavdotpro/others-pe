import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import screen from "@constants/screens";

// Core CSS required for Ionic components to work properly
import "@ionic/react/css/core.css";

import "./App.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {Object.values(screen).map(({ name, path, Component }) => (
          <Route exact path={path} key={name}>
            <Component />
          </Route>
        ))}

        <Route exact path="/">
          <Redirect to={screen.home.path} />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
