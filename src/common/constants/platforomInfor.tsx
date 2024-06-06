import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
/**
 * Check whether the device is android
 */
export const isAndroid = Platform.OS === 'android';

/**
 * Check whether the device is Ios
 */
export const isIOS = Platform.OS === 'ios';

/**
 * Check whether the device is Tablet
 */
export const isTablet = DeviceInfo.isTablet();

/**
 * Check whether the device has notch
 */
export const hasNotch = DeviceInfo.hasNotch();

/**
 * Get the device unique identifier
 */
export const UID = DeviceInfo.getUniqueId();
