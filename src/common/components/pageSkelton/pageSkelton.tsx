import {View, Text, FlexStyle, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {ThemeModelItem} from '../../model/theme/themeModel';
import {useTheme} from '@react-navigation/native';
import stylesObj from './styles';
import {scaleSize} from '../../utils/scaleSheetUtils';
import {SafeAreaView} from 'react-native-safe-area-context';
interface Props {
  visible?: boolean;
  justifyContent?: FlexStyle['justifyContent'];
  children?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  mainContainerStyle?: StyleProp<ViewStyle>;
  safeAreaVw?: StyleProp<ViewStyle>;
  isSafeAreaView?: boolean;
  isPaddingFromBottom?: boolean;
}

const defaultProps: Props = {
  visible: false,
  justifyContent: 'center',
  children: undefined,
  containerStyle: undefined,
  isSafeAreaView: false,
  isPaddingFromBottom: false,
};
const PageSkelton = (props: typeof defaultProps): React.ReactElement => {
  const theme: ThemeModelItem = useTheme();
  const styles = stylesObj(theme?.colors);
  return (
    <View style={[styles.safeAreaView, props.safeAreaVw]}>
      {props.isSafeAreaView ? (
        <SafeAreaView
          edges={['top', 'left', 'right']}
          style={[
            styles.safeAreaView,
            {marginHorizontal: scaleSize(15)},
            props?.mainContainerStyle,
          ]}>
          {!!props?.children && (
            <View
              style={[
                styles.pageVw,
                {justifyContent: props?.justifyContent},
                props?.containerStyle,
              ]}>
              {props?.children}
            </View>
          )}
        </SafeAreaView>
      ) : (
        <View
          style={[
            styles.safeAreaView,
            {paddingHorizontal: scaleSize(20)},
            props?.mainContainerStyle,
          ]}>
          <View
            style={[
              styles.pageVw,
              {justifyContent: props?.justifyContent},
              props?.containerStyle,
            ]}>
            {props?.children}
          </View>
        </View>
      )}
    </View>
  );
};

export default PageSkelton;
