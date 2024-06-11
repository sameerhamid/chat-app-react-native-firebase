import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../model/theme/themeModel';

export type VieocallModalStyleTypes = {
  container: ViewStyle;
};

const styles = (colors?: Colors): VieocallModalStyleTypes =>
  StyleSheet.create<VieocallModalStyleTypes>({
    container: {
      flex: 1,
    },
  });

export default styles;
