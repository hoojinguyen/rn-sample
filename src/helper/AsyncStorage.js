import AsyncStorage from "@react-native-async-storage/async-storage";

export const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    throw e;
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value || "";
  } catch (e) {
    throw e;
  }
};

export const removeData = async (key) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    throw e;
  }
};

export const getAllData = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (e) {
    throw e;
  }
};

export const clearAllData = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (e) {
    throw e;
  }
};
