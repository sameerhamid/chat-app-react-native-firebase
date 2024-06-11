import {View, Text} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {useTheme} from '@react-navigation/native';
import {ThemeModelItem} from '../../model/theme/themeModel';
import stylesObj from './styles';

import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
  //@ts-ignore
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
interface Props {
  visible?: boolean;
  handleOnHangupCallback?: () => void;
  userId: string;
  userName: string;
  callerId: string;
}
const defaultProps: Props = {
  visible: false,
  handleOnHangupCallback: undefined,
  userId: '',
  userName: '',
  callerId: '',
};

const CustomVideoCallModal = (props: typeof defaultProps) => {
  const theme: ThemeModelItem = useTheme();
  const styles = stylesObj(theme.colors);
  const {visible, handleOnHangupCallback, userId, userName, callerId} = props;
  return (
    <Modal isVisible={visible}>
      <View style={styles.container}>
        <ZegoUIKitPrebuiltCall
          appID={1031026343}
          appSign={
            '3bfe3cd9d0753e8f2d8afa73118078fa3fe6e21de3a750a205e01edb6ec78551'
          }
          userID={userId} // userID can be something like a phone number or the user id on your own user system.
          userName={userName}
          callID={callerId} // callID can be any unique string.
          config={{
            // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
            ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
            onOnlySelfInRoom: () => {
              // props.navigation.navigate('HomePage');
            },
            onHangUp: () => {
              handleOnHangupCallback!();
              // props.navigation.navigate('HomePage');
            },
          }}
        />
      </View>
    </Modal>
  );
};

export default CustomVideoCallModal;
