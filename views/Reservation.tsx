import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RoomListComponent from '../components/RoomListComponent';
import CheckoutComponent from '../components/CheckoutComponent';

export const Reservation = () => {

  const [step, setStep] = useState<"liste" | "recapitulatif" | "paiement">("liste");

  const [dataRoom, setDataRoom] = useState([]);

  const handleSetStep = (newStep) => {
    setStep(newStep);
  };

  const handleSetDataRoom = (data: any) => {
    setDataRoom(data);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {step === "liste" && <RoomListComponent setDataRoom={(data: any) => handleSetDataRoom(data)} setStep={handleSetStep} />}
        {step === "recapitulatif" && <CheckoutComponent getDataRoom={dataRoom} setStep={handleSetStep} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
  }
});
