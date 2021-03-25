import AsyncStorage from "@react-native-async-storage/async-storage";

const storageKey = "@storage_Key";
const storageKeyLog = "@Log";

export const saveLogin = async (value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKeyLog, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const isLogged = async () => {
  try {
    const login = await AsyncStorage.getItem(storageKeyLog);
    return login != null ? true : false;
  } catch (e) {
    // error reading value
  }
  return false;
};

export const eraseLogin = async () => {
  try {
    await AsyncStorage.removeItem(storageKeyLog);
  } catch (e) {
    // error reading value
  }
};

export const storeData = async (value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
