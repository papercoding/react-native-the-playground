import AsyncStorage from '@react-native-community/async-storage';

const LocalStorageKey = {
  APP_THEME_MODE: '@APP_THEME_MODE',
};

async function saveItem(key, value, errorHandler = () => {}) {
  await AsyncStorage.setItem(key, value, errorHandler);
}

async function getItem(key, errorHandler = () => {}) {
  const value = await AsyncStorage.getItem(key, errorHandler);
  return value;
}

export {saveItem, getItem, LocalStorageKey};
