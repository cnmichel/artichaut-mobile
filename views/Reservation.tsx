import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RoomListComponent from '../components/RoomListComponent';

export const Reservation = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <RoomListComponent />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
  }
});
