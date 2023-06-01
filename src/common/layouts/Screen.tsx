import { Component } from "@appTypes/.";
import Toolbar from "@components/Toolbar";
import { IonPage, IonContent } from "@ionic/react";
import cx from "clsx";

type Props = {
  title: string;
  subtitle?: string;
  toolbar?: boolean;
  safeArea?: boolean;
  contentClassName?: string;
};

const Screen: Component<Props> = ({
  title,
  subtitle,
  toolbar,
  safeArea = true,
  children,
  className,
  contentClassName,
}) => {
  return (
    <IonPage className={cx(safeArea && "pt-safe")} title={title}>
      <IonContent
        fullscreen
        className={cx(
          "h-full mx-auto max-w-auto lg:max-w-sm self-center",
          contentClassName
        )}
      >
        {toolbar && <Toolbar className="mb-6 mt-9" {...{ title, subtitle }} />}

        <div className={className}>{children}</div>
      </IonContent>
    </IonPage>
  );
};

export default Screen;
