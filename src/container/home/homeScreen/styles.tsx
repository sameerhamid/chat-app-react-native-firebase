import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../../common/model/theme/themeModel';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';
import {screenHeight, screenWidth} from '../../../common/constants/dimensions';

export type HomeScreenStyleTypes = {
  bottonTabs: ViewStyle;
  container: ViewStyle;
  mainContainer: ViewStyle;
  userCont: ViewStyle;
  headerCont: ViewStyle;
  profileImage: ImageStyle;
  profileImgeCon: ViewStyle;
  emptyVw: ViewStyle;
  headerContainer: ViewStyle;
  settingCont: ViewStyle;
};

const styles = (colors?: Colors): HomeScreenStyleTypes =>
  StyleSheet.create<HomeScreenStyleTypes>({
    container: {
      flex: 1,
    },
    mainContainer: {
      flex: 1,
      paddingHorizontal: scaleSize(10),
    },
    bottonTabs: {
      height: scaleSize(55),
      backgroundColor: colors?.teal,
      width: screenWidth,
      position: 'absolute',
      bottom: 0,
    },
    userCont: {
      height: scaleSize(80),
      width: '100%',
      borderBottomColor: colors?.lightGrey,
      borderBottomWidth: 1,
      backgroundColor: 'rgba(244,255,255,0.5)',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: scaleSize(20),
    },
    headerCont: {
      height: scaleSize(50),
      backgroundColor: colors?.lightGrey,
    },
    profileImage: {
      width: scaleSize(40),
      height: scaleSize(40),
    },
    profileImgeCon: {
      width: scaleSize(60),
      height: scaleSize(60),
      borderWidth: 1,
      borderColor: colors?.lightGrey,
      borderRadius: scaleSize(60),
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyVw: {
      width: '100%',
      height: scaleSize(150),
      backgroundColor: colors?.card,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scaleSize(20),
      marginTop: scaleSize(30),
    },
    headerContainer: {
      width: screenWidth,
      height: scaleSize(70),
      borderBottomWidth: scaleSize(0.5),
      borderColor: colors?.darkSlate,
      paddingHorizontal: scaleSize(10),
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.4,
      shadowRadius: 3.84,
      elevation: 5,
    },
    settingCont: {
      marginTop: scaleSize(20),
    },
  });

export default styles;
