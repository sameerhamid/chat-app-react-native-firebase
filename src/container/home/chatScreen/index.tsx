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
  const {} = useChatScreenViewController(
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

  return (
    <GiftedChat
      textInputProps={{color: 'black'}}
      messages={messages}
      //@ts-ignore
      onSend={messages => onSend(messages)}
      user={{
        _id: routParams?.myId,
      }}
    />
  );
};

export default ChatScreen;
