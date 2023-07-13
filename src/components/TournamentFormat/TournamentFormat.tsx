import React from 'react';
import { IonItem, IonList, IonToggle } from '@ionic/react';
import './TournamentFormat.css';
interface ContainerProps { }

const TournamentFormat: React.FC<ContainerProps> = () => {
  return (
      <IonList>
        <IonItem>
          <IonToggle>5 Bass Limit</IonToggle>
        </IonItem>
        <IonItem>
          <IonToggle>No Bass Limit</IonToggle>
        </IonItem>
      </IonList>
  );
};

export default TournamentFormat;