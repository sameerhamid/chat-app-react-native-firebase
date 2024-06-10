import {useTheme} from '@react-navigation/native';
import {ThemeModelItem} from '../../../common/model/theme/themeModel';
import {HomeScreenStyleTypes} from './styles';
import stylesObj from './styles';
import {TabsDataType} from '../../../common/components/customTab';
import {Images} from '../../../common/constants/images';
import {useEffect, useRef, useState} from 'react';
import {AuthModel} from '../../../common/model/auth/authModel';
import LocalStorageUtils from '../../../common/utils/LocalStorageUtils';
import {LocalStorageKeys} from '../../../common/utils/LocalStorageKeys';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import textStyles, {
  TextStylesTypes,
} from '../../../common/components/custonText/textStyles';
import {navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';

// types
interface HomeScreenVeiwControllerTypes {
  styles: HomeScreenStyleTypes;
  tabData: TabsDataType[];
  users: AuthModel[];
  loading: boolean;
  handlOnTabPress: (_index: number) => void;
  selectedTabIndex: number;
  textStyle: TextStylesTypes;
  handleChatPress: (_user: AuthModel) => void;
}

const useHomeScreenVeiwController = (): HomeScreenVeiwControllerTypes => {
  // ================ variables==================

  const theme: ThemeModelItem = useTheme();
  const tabData: TabsDataType[] = [
    {imageSource: Images.PERSONS},
    {imageSource: Images.SETTING},
  ];
  const styles: HomeScreenStyleTypes = stylesObj(theme?.colors);
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [users, setUsers] = useState<AuthModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const textStyle = textStyles(theme?.colors);
  const myIdRef = useRef<string | undefined>('');

  // ================= logic handlers====================

  /**
   *
   * @param index index of the tab
   *  handles bottom tab press
   */
  const handlOnTabPress = (index: number) => {
    setSelectedTabIndex(index);
  };

  /**
   * get the users from the fire store except the logged in user
   *
   */

  const getUserDetails = async (): Promise<void> => {
    let tempData: AuthModel[] = [];
    // @ts-ignore
    const userDetails: AuthModel = await LocalStorageUtils.getItem(
      LocalStorageKeys.USER_DETAILS,
    );
    myIdRef.current = userDetails.userId;
    setLoading(true);

    firestore()
      .collection('users')
      .where('email', '!=', userDetails.email)
      .get()
      .then(
        (
          res: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
        ) => {
          if (res.docs.length > 0) {
            res.docs.map(item => {
              tempData.push(item.data());
            });

            setUsers(tempData);
          }
          setLoading(false);
        },
      )
      .catch(err => {
        console.log('error in userComp>>>', err);
        setLoading(false);
      });
  };

  const handleChatPress = (user: AuthModel): void => {
    navigate(NavScreenTags.CHAT_SCREEN, {...user, myId: myIdRef.current});
  };

  // ================== Effects=================

  useEffect(() => {
    getUserDetails();
  }, [selectedTabIndex]);

  return {
    styles,
    tabData,
    users,
    loading,
    handlOnTabPress,
    selectedTabIndex,
    textStyle,
    handleChatPress,
  };
};

export default useHomeScreenVeiwController;
