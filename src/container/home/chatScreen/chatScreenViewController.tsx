import {useTheme} from '@react-navigation/native';
import {ThemeModelItem} from '../../../common/model/theme/themeModel';
import stylesObj, {ChatScreenStyleTypes} from './styles';
import textStyles, {
  TextStylesTypes,
} from '../../../common/components/custonText/textStyles';
export interface ChatScreenRouteParmasTypes {
  name?: string;
  email?: string;
  mobile?: string;
  password?: string;
  userId?: string;
  myId: string;
}
interface ChatScreenViewControllerTypes {
  styles: ChatScreenStyleTypes;
  textStyle: TextStylesTypes;
}

const useChatScreenViewController = (
  routeParams: ChatScreenRouteParmasTypes,
): ChatScreenViewControllerTypes => {
  const theme: ThemeModelItem = useTheme();
  const styles = stylesObj(theme.colors);
  const textStyle = textStyles(theme.colors);
  return {styles, textStyle};
};

export default useChatScreenViewController;
