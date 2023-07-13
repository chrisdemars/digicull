import React from 'react';
import { IonInput } from '@ionic/react';
interface ContainerProps { }

const BassEntry: React.FC<ContainerProps> = () => {
  return (
    <>
      <IonInput label="Lbs." labelPlacement="floating" type="number" max='2' min='1' fill="outline" placeholder="Enter pounds" inputmode='numeric'></IonInput>
      <br />
      <IonInput label="Oz." labelPlacement="floating" type="number" max='2' min='1' fill="outline" placeholder="Enter ounces" inputmode='numeric'></IonInput>
    </>
  );
};

export default BassEntry;