import React, {useCallback, useEffect, useState} from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import useChatScreenViewController, {
  ChatScreenRouteParmasTypes,
} from './chatScreenViewController';
type ChatScreenRouteParam = RouteProp<ParamListBase, 'HomeScreen'>;
import {GiftedChat, IMessage} from 'react-native-gifted-chat';

import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import CustomActivityIndicator from '../../../common/components/customActivityIndicator';
import {screenWidth} from '../../../common/constants/dimensions';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';
import {Images} from '../../../common/constants/images';
import CustomText from '../../../common/components/custonText';

interface MessageType extends IMessage {
  sendBy?: string;
  sendTo?: string;
}
interface Props {
  route: ChatScreenRouteParam;
}
const ChatScreen = (props: Props) => {
  const {route} = props;
  //@ts-ignore
  const routParams: ChatScreenRouteParmasTypes = route.params;
  const {textStyle, styles} = useChatScreenViewController(
    routParams as ChatScreenRouteParmasTypes,
  );

  const [messages, setMessages] = useState<MessageType[]>([]);

  //@ts-ignore
  useEffect(() => {
    const subscriber = firestore()
      .collection('chats')
      .doc(`${routParams.myId + routParams.userId}`)
      .collection('messages')
      .orderBy('createdAt', 'desc');

    subscriber.onSnapshot(
      (
        querySnapShot: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
      ) => {
        console.log('inside use effect');
        const allMessages = querySnapShot.docs.map(item => {
          //@ts-ignore
          return {...item._data};
        });
        setMessages(allMessages);
        console.log('allMessages>>>', allMessages);
      },
    );

    return () => subscriber;
  }, []);

  const onSend = useCallback((messages = []) => {
    const msg: IMessage = messages[0];

    const myMsg: MessageType = {
      ...msg,
      sendBy: routParams.myId,
      sendTo: routParams.userId,
      //@ts-ignore
      createdAt: Date.parse(msg.createdAt),
      user: {
        _id: routParams.myId,
        name: routParams?.name ?? '',
        avatar: '',
      },
    };

    setMessages(previousMessages =>
      GiftedChat.append(
        previousMessages,
        //@ts-ignore
        myMsg,
      ),
    );

    firestore()
      .collection('chats')
      .doc(`${routParams.myId + routParams.userId}`)
      .collection('messages')
      .add(myMsg);

    firestore()
      .collection('chats')
      .doc(`${routParams.userId + routParams.myId}`)
      .collection('messages')
      .add(myMsg);
  }, []);

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
