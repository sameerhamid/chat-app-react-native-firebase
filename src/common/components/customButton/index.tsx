import {
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import CustomText from '../custonText';
import {BorderType} from '../../constants/enums';
import {ThemeModelItem} from '../../model/theme/themeModel';
import {useTheme} from '@react-navigation/native';
import textStyles from '../custonText/textStyles';
import {buttonStyles} from './styles';

interface Props {
  onPress?: ((_event: GestureResponderEvent) => void) | undefined;
  title?: string;
  btnStyle?: ViewStyle;
  shouldDisabled?: boolean;
  hideBackground?: boolean;
  borderColor?: string;
  borderType?: BorderType;
  textSize?: number;
  borderRadious?: number;
  isCompleteRadiusButton?: boolean;
  isBigText?: boolean;
  btnTextStyles?: TextStyle;
}

const defaultProps: Props = {
  onPress: undefined,
  title: '',
  btnStyle: {},
  shouldDisabled: false,
  hideBackground: false,
  borderColor: '',
  borderType: undefined,
  borderRadious: undefined,
  isCompleteRadiusButton: false,
  isBigText: false,
  btnTextStyles: {},
};

const CustomButton = (props: typeof defaultProps) => {
  const {
    title,
    textSize,
    btnStyle,
    onPress,
    shouldDisabled,
    hideBackground,
    borderColor,
    borderType,
    borderRadious,
    isCompleteRadiusButton,
    isBigText,
    btnTextStyles,
  } = props;
  const theme: ThemeModelItem = useTheme();
  const textStyle = textStyles(theme?.colors);
  const buttonStyle = buttonStyles(theme?.colors, isCompleteRadiusButton);
  return (
    <TouchableOpacity
      style={[buttonStyle.btnView, btnStyle]}
      onPress={onPress}
      disabled={shouldDisabled}>
      <CustomText
        text={title}
        txtSize={textSize}
        textStyle={{...textStyle.whiteBold20, ...btnTextStyles}}
      />
    </TouchableOpacity>
  );
};

export default CustomButton;
