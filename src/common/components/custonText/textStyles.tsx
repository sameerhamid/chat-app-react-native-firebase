import {StyleSheet, TextStyle} from 'react-native';
import {Colors} from '../../model/theme/themeModel';
import {scaleFontSize} from '../../utils/scaleSheetUtils';

export type TextStylesTypes = {
  blackbBold16: TextStyle;
  blackBold22: TextStyle;
  blackBold26: TextStyle;
  whiteBold20: TextStyle;
  black16: TextStyle;
};

const textStyles = (colors?: Colors): TextStylesTypes =>
  StyleSheet.create<TextStylesTypes>({
    blackbBold16: {
      fontWeight: 'bold',
      fontSize: scaleFontSize(16),
    },
    blackBold22: {
      fontWeight: 'bold',
      fontSize: scaleFontSize(22),
      color: colors?.black,
    },
    whiteBold20: {
      color: colors?.primary,
      fontSize: 20,
      fontWeight: 'bold',
    },
    black16: {
      fontSize: 16,
      color: colors?.black,
    },
    blackBold26: {
      fontWeight: 'bold',
      fontSize: scaleFontSize(26),
      color: colors?.black,
    },
  });

export default textStyles;
