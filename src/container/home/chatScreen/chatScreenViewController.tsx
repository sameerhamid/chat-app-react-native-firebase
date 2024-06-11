import {useTheme} from '@react-navigation/native';
import {ThemeModelItem} from '../../../common/model/theme/themeModel';
import stylesObj, {ChatScreenStyleTypes} from './styles';
import textStyles, {
  TextStylesTypes,
} from '../../../common/components/custonText/textStyles';
import {useCallback, useEffect, useState} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
export interface ChatScreenRouteParmasTypes {
  name: string;
  email?: string;
  mobile?: string;
  password?: string;
  userId: string;
  myId: string;
}
interface MessageType extends IMessage {
  sendBy?: string;
  sendTo?: string;
}
interface ChatScreenViewControllerTypes {
  styles: ChatScreenStyleTypes;
  textStyle: TextStylesTypes;
  messages: MessageType[];
  onSend: () => void;
  isOptionModelOpen: boolean;
  handlOnOptionBtnPress: () => void;
  handleBackdropPress: () => void;
  isVideoCallModalVisible: boolean;
  handlHangUp: () => void;
  handleOpenVideoCallModal: () => void;
}

const useChatScreenViewController = (
  routeParams: ChatScreenRouteParmasTypes,
): ChatScreenViewControllerTypes => {
  const theme: ThemeModelItem = useTheme();
  const styles = stylesObj(theme.colors);
  const textStyle = textStyles(theme.colors);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isOptionModelOpen, setIsOptionsModelOpen] = useState<boolean>(false);
  const [isVideoCallModalVisible, setIsVideoCallModalVisible] =
    useState<boolean>(false);

  //@ts-ignore
  useEffect(() => {
    const subscriber = firestore()
      .collection('chats')
      .doc(`${routeParams.myId + routeParams.userId}`)
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

  const handlOnOptionBtnPress = (): void => {
    setIsOptionsModelOpen(true);
  };

  const handleBackdropPress = (): void => {
    setIsOptionsModelOpen(false);
  };

  const onSend = useCallback((messages = []) => {
    const msg: IMessage = messages[0];

    const myMsg: MessageType = {
      ...msg,
      sendBy: routeParams.myId,
      sendTo: routeParams.userId,
      //@ts-ignore
      createdAt: Date.parse(msg.createdAt),
      user: {
        _id: routeParams.myId,
        name: routeParams?.name ?? '',
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
      .doc(`${routeParams.myId + routeParams.userId}`)
      .collection('messages')
      .add(myMsg);

    firestore()
      .collection('chats')
      .doc(`${routeParams.userId + routeParams.myId}`)
      .collection('messages')
      .add(myMsg);
  }, []);

  const handlHangUp = (): void => {
    setIsVideoCallModalVisible(false);
  };
  const handleOpenVideoCallModal = (): void => {
    setIsVideoCallModalVisible(true);
  };
  return {
    styles,
    textStyle,
    messages,
    onSend,
    handlOnOptionBtnPress,
    isOptionModelOpen,
    handleBackdropPress,
    isVideoCallModalVisible,
    handlHangUp,
    handleOpenVideoCallModal,
  };
};

export default useChatScreenViewController;
