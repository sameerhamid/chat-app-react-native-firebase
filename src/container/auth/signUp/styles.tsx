import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../../common/model/theme/themeModel';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';

export type SignUpStyles = {
  headerCont: ViewStyle;
  input: ViewStyle;
  inputCont: ViewStyle;
  container: ViewStyle;
};

const styles = (colors?: Colors): SignUpStyles =>
  StyleSheet.create<SignUpStyles>({
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
  });

export default styles;
