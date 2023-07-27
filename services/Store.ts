import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const isWeb = Platform.OS === 'web';

export default function Store() {
  async function saveItem(key: string, value: any) {
    if (isWeb) {
      // Stockage sécurisé pour le web (à implémenter selon vos besoins)
      // Par exemple, vous pouvez utiliser localStorage ou sessionStorage
      // localStorage.setItem(key, value);
    } else {
      // Stockage sécurisé pour Android et iOS (Expo)
      await SecureStore.setItemAsync(key, value);
    }
  }

  async function getItem(key: string) {
    if (isWeb) {
      // Récupération du stockage sécurisé pour le web (à implémenter selon vos besoins)
      // Par exemple, vous pouvez utiliser localStorage ou sessionStorage
      // return localStorage.getItem(key);
    } else {
      // Récupération du stockage sécurisé pour Android et iOS (Expo)
      try {
        return await SecureStore.getItemAsync(key);
      } catch (err) {
        console.error('Key does not exist');
      }
    }
  }

  return {
    saveItem,
    getItem
  };
}
