import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../../common/model/theme/themeModel';
import {screenWidth} from '../../../common/constants/dimensions';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';

export type ChatScreenStyleTypes = {
  headerContainer: ViewStyle;
  leftHeaderCont: ViewStyle;
  backAndProfile: ViewStyle;
  profileCont: ViewStyle;
  backBtn: ImageStyle;
  profile: ImageStyle;
  more: ImageStyle;
};

const styles = (colors: Colors): ChatScreenStyleTypes =>
  StyleSheet.create<ChatScreenStyleTypes>({
    headerContainer: {
      width: screenWidth,
      height: scaleSize(80),
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: scaleSize(10),
      justifyContent: 'space-between',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.4,
      shadowRadius: 3.84,
      elevation: 5,
      borderBottomWidth: scaleSize(0.5),
      borderColor: colors?.darkSlate,
    },
    leftHeaderCont: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: scaleSize(10),
      columnGap: scaleSize(10),
    },
    backAndProfile: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scaleSize(5),
    },
    profileCont: {
      width: scaleSize(60),
      height: scaleSize(60),
      borderRadius: scaleSize(60),
      borderWidth: scaleSize(0.5),
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'grey',
    },
    backBtn: {
      width: scaleSize(20),
      height: scaleSize(20),
    },
    profile: {
      width: scaleSize(40),
      height: scaleSize(40),
    },
    more: {
      width: scaleSize(40),
      height: scaleSize(40),
    },
  });

export default styles;
