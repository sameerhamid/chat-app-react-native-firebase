import {ThemeModelItem} from '../model/theme/themeModel';
import Colors from '../styles/Colors';

export const DarkTheme: ThemeModelItem = {
  dark: true,
  colors: {
    primary: Colors.WHITE_COLOR,
    background: Colors.BACKGROUND,
    card: Colors.CARD,
    text: Colors.TEXT,
    border: Colors.BORDER,
    notification: Colors.NOTIFICATION,
  },
};
