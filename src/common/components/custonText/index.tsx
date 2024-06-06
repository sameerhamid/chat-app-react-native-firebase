import {View, Text, TextStyle, GestureResponderEvent} from 'react-native';
import React from 'react';
import {ThemeModelItem} from '../../model/theme/themeModel';
import {useTheme} from '@react-navigation/native';
import textStyles from './textStyles';

interface Props {
  text?: string;
  textStyle?: TextStyle;
  txtSize?: number;
  numberOfLines?: number;
  onTextPresss?: ((_event: GestureResponderEvent) => void) | undefined;
}

const defaultProps: Props = {
  text: '',
  textStyle: {},
  txtSize: undefined,
  numberOfLines: undefined,
  onTextPresss: undefined,
};

const CustomText = (props: typeof defaultProps): React.ReactElement | null => {
  const theme: ThemeModelItem = useTheme();
  const styles = textStyles(theme?.colors);
  const {text, textStyle, txtSize, numberOfLines, onTextPresss} = props;

  if (text) {
    return (
      <Text
        onPress={onTextPresss}
        numberOfLines={numberOfLines || 0}
        style={[styles.bold16, textStyle, txtSize ? {fontSize: txtSize} : {}]}>
        {text ?? ''}
      </Text>
    );
  }

  return null;
};

export default CustomText;
