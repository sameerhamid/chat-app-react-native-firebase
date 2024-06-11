import React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import useChatScreenViewController, {
  ChatScreenRouteParmasTypes,
} from './chatScreenViewController';
type ChatScreenRouteParam = RouteProp<ParamListBase, 'HomeScreen'>;
import {GiftedChat, IMessage} from 'react-native-gifted-chat';

import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {Images} from '../../../common/constants/images';
import CustomText from '../../../common/components/custonText';
import {goBack} from '../../../common/utils/NavigatorUtils';
import ReactNativeModal from 'react-native-modal';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';
import Colors from '../../../common/styles/Colors';
import {screenHeight, screenWidth} from '../../../common/constants/dimensions';
import CustomVideoCallModal from '../../../common/components/customVideoCallModal';

interface Props {
  route: ChatScreenRouteParam;
}
const ChatScreen = (props: Props) => {
  const {route} = props;
  //@ts-ignore
  const routParams: ChatScreenRouteParmasTypes = route.params;
  const {
    textStyle,
    styles,
    messages,
    onSend,
    isOptionModelOpen,
    handlOnOptionBtnPress,
    handleBackdropPress,
    isVideoCallModalVisible,
    handlHangUp,
    handleOpenVideoCallModal,
  } = useChatScreenViewController(routParams as ChatScreenRouteParmasTypes);

  const showMoreOptionsSheet = (): React.ReactElement => {
    return (
      <TouchableOpacity
        style={{
          width: screenWidth,
          height: screenHeight,
          position: 'absolute',
          top: scaleSize(0),
          zIndex: 100,
        }}
        onPress={handleBackdropPress}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.TRANSPARENT,
            position: 'absolute',
            right: scaleSize(2),
            top: scaleSize(120),
            paddingHorizontal: scaleSize(20),
            paddingVertical: scaleSize(30),
            borderRadius: scaleSize(10),
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            rowGap: scaleSize(8),
          }}>
          <CustomText text="Option 1" />
          <CustomText text="Option 2" />
          <CustomText text="Option 2" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  // ============ header===========
  const renderHeader = (): React.ReactElement => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.leftHeaderCont}>
          <View style={styles.backAndProfile}>
            {/* backarrow */}
            <TouchableOpacity onPress={goBack}>
              <Image source={Images.BACK_ARROW} style={styles.backBtn} />
            </TouchableOpacity>

            {/* profileImage  */}
            <TouchableOpacity style={styles.profileCont}>
              <Image source={Images.PROFILE} style={styles.profile} />
            </TouchableOpacity>
          </View>

          {/* name of the user  */}

          <View>
            <CustomText text={routParams.name} />
            <CustomText text="online" txtSize={10} />
          </View>
        </View>
        {/* more options button  */}
        <View style={styles.rightHeaderContainer}>
          <TouchableOpacity onPress={handleOpenVideoCallModal}>
            <Image source={Images.VIDEO_CALL} style={styles.videoCall} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlOnOptionBtnPress}>
            <Image source={Images.MORE_OPTIONS} style={styles.more} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {renderHeader()}
      {isOptionModelOpen && showMoreOptionsSheet()}
      <GiftedChat
        textInputProps={{color: 'black'}}
        messages={messages}
        //@ts-ignore
        onSend={messages => onSend(messages)}
        user={{
          _id: routParams?.myId,
        }}
        alwaysShowSend={true}
        showUserAvatar
        renderUsernameOnMessage
      />

      <CustomVideoCallModal
        visible={isVideoCallModalVisible}
        userId={routParams.myId}
        userName={routParams.name}
        callerId={routParams.userId}
        handleOnHangupCallback={handlHangUp}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
