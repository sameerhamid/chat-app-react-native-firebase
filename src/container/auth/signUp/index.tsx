import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import PageSkelton from '../../../common/components/pageSkelton/pageSkelton';
import stylesObj from './styles';
import {ThemeModelItem} from '../../../common/model/theme/themeModel';
import {useTheme} from '@react-navigation/native';
import textStyles from '../../../common/components/custonText/textStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomText from '../../../common/components/custonText';
import CustomButton from '../../../common/components/customButton';
import Spacer from '../../../common/components/utility/Spacer';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';
const SignUp = () => {
  const theme: ThemeModelItem = useTheme();
  const styles = stylesObj(theme?.colors);
  const textStyle = textStyles(theme?.colors);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confPassword, setConfPassword] = useState<string>('');
  const renderInputs = () => {
    return (
      <View style={styles.inputCont}>
        <TextInput
          placeholder="Enter Name"
          style={styles.input}
          value={name}
          placeholderTextColor={theme?.colors.placeholderTxt}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder="Enter Email"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor={theme?.colors.placeholderTxt}
        />
        <TextInput
          placeholder="Enter Mobile"
          style={styles.input}
          value={mobile}
          onChangeText={text => setMobile(text)}
          placeholderTextColor={theme?.colors.placeholderTxt}
        />
        <TextInput
          placeholder="Enter Password"
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor={theme?.colors.placeholderTxt}
        />
        <TextInput
          placeholder="Confirm Passowrd"
          style={styles.input}
          value={confPassword}
          onChangeText={text => setConfPassword(text)}
          placeholderTextColor={theme?.colors.placeholderTxt}
        />
      </View>
    );
  };

  const renderButton = (): React.ReactElement => {
    return <CustomButton title="SignUp" />;
  };

  return (
    <PageSkelton isSafeAreaView>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCont}>
          <CustomText text="Singup" textStyle={textStyle.blackBold22} />
        </View>

        {renderInputs()}
        <Spacer height={scaleSize(20)} />
        {renderButton()}
      </KeyboardAwareScrollView>
    </PageSkelton>
  );
};

export default SignUp;
