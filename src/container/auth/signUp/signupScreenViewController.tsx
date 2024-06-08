import {useTheme} from '@react-navigation/native';
import {ThemeModelItem} from '../../../common/model/theme/themeModel';
import textStyles, {
  TextStylesTypes,
} from '../../../common/components/custonText/textStyles';
import stylesObj, {SignUpStyleTypes} from './styles';
import {Dispatch, SetStateAction, useState} from 'react';
import {navigate, replace} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import {Alert} from 'react-native';
import LocalStorageUtils from '../../../common/utils/LocalStorageUtils';
import {LocalStorageKeys} from '../../../common/utils/LocalStorageKeys';
import {AuthModel} from '../../../common/model/auth/authModel';
interface SignupScreenViewControllerTypes {
  handleSignUpPress: () => void;
  styles: SignUpStyleTypes;
  textStyle: TextStylesTypes;
  theme: ThemeModelItem;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  mobile: string;
  setMobile: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  confPassword: string;
  setConfPassword: Dispatch<SetStateAction<string>>;
  handleOrLoginPress: () => void;
  isSecrueTextEntry: boolean;
  handlEyeIconPress: () => void;
}

const useSignupScreenViewController = (): SignupScreenViewControllerTypes => {
  //================= variables ====================

  const theme: ThemeModelItem = useTheme();
  const styles: SignUpStyleTypes = stylesObj(theme?.colors);
  const textStyle: TextStylesTypes = textStyles(theme?.colors);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confPassword, setConfPassword] = useState<string>('');
  const [isSecrueTextEntry, seIsSecureTextEntry] = useState<boolean>(true);

  // ========================= Logic handlers ==================

  const isValidData = (): boolean => {
    let isValid = true;
    if (name === '' || name === null || name === undefined) {
      isValid = false;
    }
    if (email === '' || email === null || email === undefined) {
      isValid = false;
    }
    if (mobile === '' || mobile === null || mobile === undefined) {
      isValid = false;
    }
    if (password === '' || password === null || password === undefined) {
      isValid = false;
    }
    if (password !== confPassword) {
      isValid = false;
    }
    return isValid;
  };

  const handleSignUpPress = (): void => {
    const userId = uuid.v4();

    if (isValidData()) {
      firestore()
        .collection('users')
        .doc(userId as string)
        .set({
          name: name,
          email: email,
          mobile: mobile,
          password: password,
          userId: userId,
        })
        .then(async res => {
          Alert.alert(`User registerd successful`);
          const userDetials: AuthModel = {
            name,
            email,
            mobile,
            password,
            userId: userId as string,
          };
          await LocalStorageUtils.setItem(
            LocalStorageKeys.USER_DETAILS,
            userDetials,
          );
          replace(NavScreenTags.HOME_SCREEN);
        })
        .catch(err => {
          Alert.alert(`Error>${err}`);
          console.log('Error ', err);
        });
    } else {
      Alert.alert('Please enter valid data');
    }
  };

  /**
   * navigate to login screen
   */

  const handleOrLoginPress = (): void => {
    navigate(NavScreenTags.LOGIN_SCREEEN);
  };

  const handlEyeIconPress = (): void => {
    seIsSecureTextEntry(!isSecrueTextEntry);
  };
  return {
    handleSignUpPress,
    textStyle,
    styles,
    theme,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    mobile,
    setMobile,
    confPassword,
    setConfPassword,
    handleOrLoginPress,
    isSecrueTextEntry,
    handlEyeIconPress,
  };
};

export default useSignupScreenViewController;
