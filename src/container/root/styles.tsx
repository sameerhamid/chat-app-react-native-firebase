import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {screenHeight, screenWidth} from '../../common/constants/dimensions';

export type SplashScreenStyleTypes = {
  flex: ViewStyle;
  splashImage: ImageStyle;
};

const styles = (): SplashScreenStyleTypes =>
  StyleSheet.create<SplashScreenStyleTypes>({
    flex: {
      flex: 1,
    },
    splashImage: {
      width: screenWidth,
      height: screenHeight,
    },
  });
export default styles;
