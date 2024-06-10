import React, {useCallback, useEffect, useState} from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import useChatScreenViewController, {
  ChatScreenRouteParmasTypes,
} from './chatScreenViewController';
type ChatScreenRouteParam = RouteProp<ParamListBase, 'HomeScreen'>;
import {GiftedChat, IMessage} from 'react-native-gifted-chat';

import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';

import {Images} from '../../../common/constants/images';
import CustomText from '../../../common/components/custonText';

interface Props {
  route: ChatScreenRouteParam;
}
const ChatScreen = (props: Props) => {
  const {route} = props;
  //@ts-ignore
  const routParams: ChatScreenRouteParmasTypes = route.params;
  const {textStyle, styles, messages, onSend} = useChatScreenViewController(
    routParams as ChatScreenRouteParmasTypes,
  );

  // ============ header===========
  const renderChatHeader = (): React.ReactElement => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.leftHeaderCont}>
          <View style={styles.backAndProfile}>
            {/* backarrow */}
            <TouchableOpacity>
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
        <TouchableOpacity>
          <Image source={Images.MORE_OPTIONS} style={styles.more} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {renderChatHeader()}
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
    </SafeAreaView>
  );
};

export default ChatScreen;
