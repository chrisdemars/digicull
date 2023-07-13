import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import TournamentFormat from '../components/TournamentFormat/TournamentFormat';
import BassEntry from '../components/BassEntry/BassEntry';
import SubmitWeightButton from '../components/SubmitWeightButton/SubmitWeightButton';

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
        <BassEntry />
        <SubmitWeightButton />
      </IonContent>
    </IonPage>
  );
};

export default Home;
