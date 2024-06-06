import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../model/theme/themeModel';
import {scaleSize} from '../../utils/scaleSheetUtils';

export type PageSkeltonStyle = {
  safeAreaView: ViewStyle;
  pageVw: ViewStyle;
};

const styles = (
  colors?: Colors,
  isPaddingFromBottom?: boolean,
): PageSkeltonStyle =>
  StyleSheet.create<PageSkeltonStyle>({
    safeAreaView: {
      flex: 1,
      backgroundColor: colors?.darkSlate,
      paddingBottom: isPaddingFromBottom ? scaleSize(10) : 0,
    },
    pageVw: {
      flex: 1,
    },
  });

export default styles;
