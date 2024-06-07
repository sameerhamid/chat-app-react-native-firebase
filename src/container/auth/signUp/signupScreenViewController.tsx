import {useTheme} from '@react-navigation/native';
import {ThemeModelItem} from '../../../common/model/theme/themeModel';
import textStyles, {
  TextStylesTypes,
} from '../../../common/components/custonText/textStyles';
import stylesObj, {SignUpStyleTypes} from './styles';
import {Dispatch, SetStateAction, useState} from 'react';
import {navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';
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

  const handleSignUpPress = (): void => {};

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
