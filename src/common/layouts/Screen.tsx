import { Component } from "@appTypes/.";
import { IonPage, IonContent } from "@ionic/react";
import cx from "clsx";

type Props = {
  title: string;
  safeArea?: boolean;
};

const Screen: Component<Props> = ({ title, safeArea, children }) => {
  return (
    <IonPage className={cx(safeArea && "pt-safe")} title={title}>
      <IonContent fullscreen>{children}</IonContent>
    </IonPage>
  );
};

export default Screen;
