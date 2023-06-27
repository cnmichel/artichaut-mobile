import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import ReservationView from './views/ReservationView';

export default function App() {
  return (
    <View style={styles.container}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <ReservationView />
      </ApplicationProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
