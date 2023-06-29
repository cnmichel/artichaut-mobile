import * as SecureStore from 'expo-secure-store';

export default function Store() {

  // Sauvegarde de la clé dans le secure store
  async function saveItem(key: string, value: any) {
    await SecureStore.setItemAsync(key, value);
  }

  // Récupération de la clé dans le secure store
  async function getItem(key: string) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (err) {
      console.error('Key does not exist');
    }
  }

  return {
    saveItem,
    getItem
  }
}