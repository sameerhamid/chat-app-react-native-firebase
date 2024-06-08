import {View, Text, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import stylesObj from './styles';
import {ThemeModelItem} from '../../model/theme/themeModel';
import {useTheme} from '@react-navigation/native';

interface Props {
  visible?: boolean;
}
const defaultProps: Props = {
  visible: false,
};
const CustomActivityIndicator = (props: typeof defaultProps) => {
  const {visible} = props;
  const theme: ThemeModelItem = useTheme();
  const styles = stylesObj(theme?.colors);
  if (visible) {
    return (
      <Modal visible={visible} animationType="fade" transparent={true}>
        <View style={styles.modal}>
          <ActivityIndicator size={'large'} color={theme.colors.teal} />
        </View>
      </Modal>
    );
  }

  return null;
};

export default CustomActivityIndicator;
