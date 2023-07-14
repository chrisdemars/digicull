import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRadio, IonRadioGroup, IonInput, IonButton, IonItem } from '@ionic/react';
import './Home.css';
// import TournamentFormat from '../components/TournamentFormat/TournamentFormat';
// import BassEntry from '../components/BassEntry/BassEntry';
// import SubmitWeightButton from '../components/SubmitWeightButton/SubmitWeightButton';

const Home: React.FC = () => {
  const [entries, setEntries] = useState([])
  const [formValue, setFormValue] = useState({ pounds: 0, ounces: 0 })

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log('This works!');
  }

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
        <IonRadioGroup value="5-fish">
          <IonRadio value="5-fish">5 Fish</IonRadio>
          <br />
          <IonRadio value="unlimited">Unlimited</IonRadio>
        </IonRadioGroup>
        <form onSubmit={onSubmitHandler}>
          <IonItem>
            <IonInput onIonInput={(e) => setFormValue({ ...formValue, pounds: parseInt(e.detail.value!, 10) })} label="Lbs." labelPlacement="floating" value={formValue.pounds} type="number" max='2' min='1' fill="outline" placeholder="Enter pounds" inputmode='numeric'></IonInput>
          </IonItem>
          <IonItem>
            <IonInput onIonInput={(e) => setFormValue({ ...formValue, ounces: parseInt(e.detail.value!, 10) })} label="Oz." labelPlacement="floating" value={formValue.ounces} type="number" max='2' min='1' fill="outline" placeholder="Enter ounces" inputmode='numeric'></IonInput>
          </IonItem>
          <IonButton type="submit" size="default">Submit Weight</IonButton>
        </form>
        <pre>
          {JSON.stringify(formValue, null, 2)}
        </pre>
        {/* <TournamentFormat />
        <BassEntry />
        <SubmitWeightButton /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
