import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import TournamentFormat from '../components/TournamentFormat/TournamentFormat';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DigiCull</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">DigiCull</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TournamentFormat />
      </IonContent>
    </IonPage>
  );
};

export default Home;
