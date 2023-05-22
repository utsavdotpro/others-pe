import { IonContent, IonPage } from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage className="pt-safe">
      <IonContent fullscreen>
        <div className="p-4 font-bold">Hello from Tailwind!</div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
