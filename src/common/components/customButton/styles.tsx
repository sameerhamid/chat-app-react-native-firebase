import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../model/theme/themeModel';
import {scaleSize} from '../../utils/scaleSheetUtils';

export type ButtonStylesTypes = {
  btnView: ViewStyle;
  disabledBtnVw: ViewStyle;
};

export const buttonStyles = (
  colors?: Colors,
  isCompleteRadiuButton?: boolean,
): ButtonStylesTypes =>
  StyleSheet.create<ButtonStylesTypes>({
    btnView: {
      height: scaleSize(50),
      paddingVertical: scaleSize(10),
      paddingHorizontal: scaleSize(8),
      borderRadius: isCompleteRadiuButton ? scaleSize(10) : scaleSize(15),
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      borderBottomLeftRadius: isCompleteRadiuButton ? scaleSize(10) : 0,
      borderBottomRightRadius: isCompleteRadiuButton ? scaleSize(10) : 0,
      backgroundColor: colors?.teal,
    },
    disabledBtnVw: {
      backgroundColor: colors?.tealDisable,
    },
  });
