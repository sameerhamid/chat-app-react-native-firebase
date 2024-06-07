import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../../common/model/theme/themeModel';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';

export type LoginStyleTypes = {
  headerCont: ViewStyle;
  input: ViewStyle;
  inputCont: ViewStyle;
  container: ViewStyle;
  orLoginCont: ViewStyle;
  eyeIcon: ImageStyle;
  eyeIconCont: ViewStyle;
  inputItemContainer: ViewStyle;
};

const styles = (colors?: Colors): LoginStyleTypes =>
  StyleSheet.create<LoginStyleTypes>({
    headerCont: {
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    inputCont: {
      marginTop: scaleSize(20),
      rowGap: scaleSize(10),
    },
    input: {
      borderWidth: 1,
      paddingHorizontal: scaleSize(10),
      borderRadius: scaleSize(6),
      borderColor: colors?.lightGrey,
      height: scaleSize(50),
    },
    inputItemContainer: {
      justifyContent: 'center',
      // alignItems: 'center',
    },
    orLoginCont: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    eyeIcon: {
      width: scaleSize(20),
      height: scaleSize(20),
    },
    eyeIconCont: {
      position: 'absolute',
      right: scaleSize(20),
    },
  });

export default styles;
