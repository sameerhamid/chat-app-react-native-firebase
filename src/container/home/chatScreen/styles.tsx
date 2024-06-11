import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../../common/model/theme/themeModel';
import {screenWidth} from '../../../common/constants/dimensions';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';
import {isIOS} from '../../../common/constants/platforomInfor';

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
      borderBottomWidth: scaleSize(isIOS ? 0.5 : 1),
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
