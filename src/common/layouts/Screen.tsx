import { Component } from "@appTypes/.";
import { IonPage, IonContent } from "@ionic/react";
import cx from "clsx";

type Props = {
  title: string;
  safeArea?: boolean;
};

const Screen: Component<Props> = ({ title, safeArea, children, className }) => {
  return (
    <IonPage className={cx(safeArea && "pt-safe")} title={title}>
      <IonContent
        fullscreen
        className={cx(
          "h-full mx-auto max-w-auto lg:max-w-sm self-center hhj",
          className
        )}
      >
        {children}
      </IonContent>
    </IonPage>
  );
};

export default Screen;
