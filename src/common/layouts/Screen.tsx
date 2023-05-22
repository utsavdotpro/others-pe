import { Component } from "@appTypes/.";
import { IonPage, IonContent } from "@ionic/react";
import cx from "clsx";

type Props = {
  safeArea?: boolean;
};

const Screen: Component<Props> = ({ safeArea, children }) => {
  return (
    <IonPage className={cx(safeArea && "pt-safe")}>
      <IonContent fullscreen>{children}</IonContent>
    </IonPage>
  );
};

export default Screen;
