import {useTheme} from '@react-navigation/native';
import {ThemeModelItem} from '../../../common/model/theme/themeModel';
import textStyles, {
  TextStylesTypes,
} from '../../../common/components/custonText/textStyles';
import stylesObj, {LoginStyleTypes} from './styles';
import {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';
import {navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {AuthModel} from '../../../common/model/auth/authModel';
import LocalStorageUtils from '../../../common/utils/LocalStorageUtils';
import {LocalStorageKeys} from '../../../common/utils/LocalStorageKeys';
interface SignupScreenViewControllerTypes {
  handleLoginPress: () => void;
  styles: LoginStyleTypes;
  textStyle: TextStylesTypes;
  theme: ThemeModelItem;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  handleOrSignUpPress: () => void;
  isSecrueTextEntry: boolean;
  handlEyeIconPress: () => void;
}

const useLoginScreenViewController = (): SignupScreenViewControllerTypes => {
  //================= variables ====================

  const theme: ThemeModelItem = useTheme();
  const styles: LoginStyleTypes = stylesObj(theme?.colors);
  const textStyle: TextStylesTypes = textStyles(theme?.colors);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSecrueTextEntry, seIsSecureTextEntry] = useState<boolean>(true);
  const userDetailsRef = useRef<AuthModel | undefined | void>();

  // ========================= Logic handlers ==================

  const getUserDetialsFromLocalStorage = async (): Promise<void> => {
    const userDetials = await LocalStorageUtils.getItem(
      LocalStorageKeys.USER_DETAILS,
    );
    userDetailsRef.current = userDetials;
  };

  useEffect(() => {
    getUserDetialsFromLocalStorage();
  }, []);

  const handleLoginPress = (): void => {
    firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(
        (
          res: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
        ) => {
          if (res.docs) {
            console.log('----called in if------');

            console.log(res.docs[0].data());
          }
        },
      )
      .catch(err => {
        console.log(err);
        Alert.alert('User not found');
      });
  };

  /**
   * navigate to login screen
   */

  const handleOrSignUpPress = (): void => {
    navigate(NavScreenTags.SIGNUP_SCREEN);
  };

  const handlEyeIconPress = (): void => {
    seIsSecureTextEntry(!isSecrueTextEntry);
  };
  return {
    handleLoginPress,
    textStyle,
    styles,
    theme,
    email,
    setEmail,
    password,
    setPassword,
    handleOrSignUpPress,
    isSecrueTextEntry,
    handlEyeIconPress,
  };
};

export default useLoginScreenViewController;
