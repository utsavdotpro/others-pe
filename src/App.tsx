import * as amplitude from "@amplitude/analytics-browser";
import screen from "@constants/screens";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

import "./App.css";
// Core CSS required for Ionic components to work properly
import "@ionic/react/css/core.css";

setupIonicReact();

const App: React.FC = () => {
  useEffect(() => {
    amplitude.init(process.env.REACT_APP_AMPLITUDE_API_KEY!);
  }, []);

  return (
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
};

export default App;
