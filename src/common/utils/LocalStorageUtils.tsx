import AsyncStorage from '@react-native-async-storage/async-storage';

// import {StorageKeysTags} from '../constants/storageKeysTags';

export default class LocalStorageUtils {
  /**
   * set Item In Local Storage
   * @param key string
   * @param value Object
   * @returns
   */
  static setItem(key: string, value: Object): Promise<void> {
    return AsyncStorage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value),
    );
  }

  /**
   * get Item from Local Storage
   * @param key string
   * @returns
   */
  static getItem(key: string): Promise<void> {
    return AsyncStorage.getItem(key).then(item => {
      if (item === undefined || item === '' || item === null) {
        return undefined;
      }
      try {
        return JSON.parse(item);
      } catch (err) {
        return item;
      }
    });
  }

  /**
   * Remove Item from Local Storage
   * @param key string
   * @returns
   */
  static removeItem(key: string): Promise<void> {
    return AsyncStorage.removeItem(key);
  }

  /**
   * Remove all keys from the Local Storage
   * @returns
   */
  static removeAll(): Promise<void> {
    return AsyncStorage.clear();
  }
}
