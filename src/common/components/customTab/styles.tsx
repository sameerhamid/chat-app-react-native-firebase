import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../model/theme/themeModel';
import {scaleSize} from '../../utils/scaleSheetUtils';

interface TabStyleTypes {
  tabContainer: ViewStyle;
  tab: ViewStyle;
  tabImage: ImageStyle;
}

const styles = (colors?: Colors): TabStyleTypes =>
  StyleSheet.create<TabStyleTypes>({
    tabContainer: {
      flex: 1,
      marginHorizontal: scaleSize(50),
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    tab: {
      width: scaleSize(80),
      height: scaleSize(40),
      borderRadius: scaleSize(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabImage: {
      width: scaleSize(24),
      height: scaleSize(24),
      tintColor: 'white',
    },
  });

export default styles;
