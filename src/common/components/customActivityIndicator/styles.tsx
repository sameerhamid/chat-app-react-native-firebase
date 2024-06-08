import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../model/theme/themeModel';
import {screenHeight, screenWidth} from '../../constants/dimensions';

type Styles = {
  modal: ViewStyle;
};

const styles = (colors?: Colors): Styles =>
  StyleSheet.create<Styles>({
    modal: {
      backgroundColor: colors?.transparent,
      width: screenWidth,
      height: screenHeight,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles;
