import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PageSkelton from '../../../common/components/pageSkelton/pageSkelton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomText from '../../../common/components/custonText';
import CustomButton from '../../../common/components/customButton';
import Spacer from '../../../common/components/utility/Spacer';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';
import useLoginScreenViewController from './loginScreenViewController';
import {Images} from '../../../common/constants/images';
const Login = () => {
  const {
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
  } = useLoginScreenViewController();

  const renderInputs = () => {
    return (
      <View style={styles.inputCont}>
        <TextInput
          autoCapitalize="none"
          placeholder="Enter Email"
          style={[styles.input, textStyle.black16]}
          value={email}
          onChangeText={text => setEmail(text)}
          inputMode="email"
          placeholderTextColor={theme?.colors.placeholderTxt}
        />

        <View style={styles.inputItemContainer}>
          <TextInput
            autoCapitalize="none"
            secureTextEntry={isSecrueTextEntry}
            placeholder="Enter Password"
            style={[styles.input, textStyle.black16]}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholderTextColor={theme?.colors.placeholderTxt}
          />
          <TouchableOpacity
            style={styles.eyeIconCont}
            onPress={handlEyeIconPress}>
            <Image
              source={isSecrueTextEntry ? Images.EYE : Images.HIDE_EYE}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderSignUpButton = (): React.ReactElement => {
    return <CustomButton title="Login" onPress={handleLoginPress} />;
  };

  return (
    <PageSkelton isSafeAreaView>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCont}>
          <CustomText text="Login" textStyle={textStyle.blackBold22} />
        </View>
        <Spacer height={scaleSize(20)} />
        {renderInputs()}
        <Spacer height={scaleSize(20)} />
        {renderSignUpButton()}
        <Spacer height={scaleSize(10)} />
        <CustomButton
          onPress={handleOrSignUpPress}
          title="Or Singup"
          btnStyle={styles.orLoginCont}
          btnTextStyles={textStyle.blackBold22}
        />
      </KeyboardAwareScrollView>
    </PageSkelton>
  );
};

export default Login;
