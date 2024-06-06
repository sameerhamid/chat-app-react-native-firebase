import {StyleSheet, TextStyle} from 'react-native';
import {Colors} from '../../model/theme/themeModel';
import {scaleFontSize} from '../../utils/scaleSheetUtils';

export type TextStyles = {
  bold16: TextStyle;
  blackBold22: TextStyle;
  whiteBold20: TextStyle;
};

const textStyles = (colors?: Colors): TextStyles =>
  StyleSheet.create<TextStyles>({
    bold16: {
      fontWeight: 'bold',
      fontSize: scaleFontSize(16),
    },
    blackBold22: {
      fontWeight: 'bold',
      fontSize: scaleFontSize(16),
      color: colors?.black,
    },
    whiteBold20: {
      color: colors?.primary,
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

export default textStyles;
