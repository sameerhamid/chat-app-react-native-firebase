import {useTheme} from '@react-navigation/native';
import {ThemeModelItem} from '../../../common/model/theme/themeModel';
import textStyles, {
  TextStylesTypes,
} from '../../../common/components/custonText/textStyles';
import stylesObj, {LoginStyleTypes} from './styles';
import {Dispatch, SetStateAction, useState} from 'react';
import {navigate} from '../../../common/utils/NavigatorUtils';
import {NavScreenTags} from '../../../common/constants/NavScreenTags';
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

  // ========================= Logic handlers ==================

  const handleLoginPress = (): void => {};

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
