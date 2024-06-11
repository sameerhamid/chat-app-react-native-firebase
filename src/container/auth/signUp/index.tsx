import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PageSkelton from '../../../common/components/pageSkelton/pageSkelton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomText from '../../../common/components/custonText';
import CustomButton from '../../../common/components/customButton';
import Spacer from '../../../common/components/utility/Spacer';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';
import useSignupScreenViewController from './signupScreenViewController';
import {Images} from '../../../common/constants/images';
const SignUp = () => {
  const {
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
  } = useSignupScreenViewController();

  const renderInputs = () => {
    return (
      <View style={styles.inputCont}>
        <TextInput
          autoCapitalize="none"
          placeholder="Enter Name"
          style={[styles.input, textStyle.black16]}
          value={name}
          placeholderTextColor={theme?.colors.placeholderTxt}
          onChangeText={text => setName(text)}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Enter Email"
          style={[styles.input, textStyle.black16]}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor={theme?.colors.placeholderTxt}
          inputMode="email"
        />
        <TextInput
          placeholder="Enter Mobile"
          style={[styles.input, textStyle.black16]}
          value={mobile}
          onChangeText={text => setMobile(text)}
          placeholderTextColor={theme?.colors.placeholderTxt}
          inputMode="numeric"
          maxLength={10}
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
        <View style={styles.inputItemContainer}>
          <TextInput
            autoCapitalize="none"
            secureTextEntry={isSecrueTextEntry}
            placeholder="Confirm Passowrd"
            style={[styles.input, textStyle.black16]}
            value={confPassword}
            onChangeText={text => setConfPassword(text)}
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
    return <CustomButton title="SignUp" onPress={handleSignUpPress} />;
  };

  return (
    <PageSkelton isSafeAreaView>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCont}>
          <CustomText text="Singup" textStyle={textStyle.blackBold22} />
        </View>
        <Spacer height={scaleSize(20)} />
        {renderInputs()}
        <Spacer height={scaleSize(20)} />
        {renderSignUpButton()}
        <Spacer height={scaleSize(10)} />
        <CustomButton
          onPress={handleOrLoginPress}
          title="Or Login"
          btnStyle={styles.orLoginCont}
          btnTextStyles={textStyle.blackBold22}
        />
      </KeyboardAwareScrollView>
    </PageSkelton>
  );
};

export default SignUp;
