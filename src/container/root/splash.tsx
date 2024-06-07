import {useEffect, useRef} from 'react';
import {NavScreenTags} from '../../common/constants/NavScreenTags';
import {navigate, replace} from '../../common/utils/NavigatorUtils';
import {Image, View} from 'react-native';
import {Images} from '../../common/constants/images';
import {screenHeight, screenWidth} from '../../common/constants/dimensions';
import SplashScreen from 'react-native-splash-screen';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import LocalStorageUtils from '../../common/utils/LocalStorageUtils';
import {LocalStorageKeys} from '../../common/utils/LocalStorageKeys';
import {AuthModel} from '../../common/model/auth/authModel';
import firestore from '@react-native-firebase/firestore';

const Splash = () => {
  const userDetailsRef = useRef<AuthModel | undefined | void>();
  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      navigate(NavScreenTags.SIGNUP_SCREEN);
    }, 2000);
  }, []);

  const getUserDetialsFromLocalStorage = async (): Promise<void> => {
    const userDetials = await LocalStorageUtils.getItem(
      LocalStorageKeys.USER_DETAILS,
    );
    userDetailsRef.current = userDetials;
  };

  useEffect(() => {
    getUserDetialsFromLocalStorage();
  }, []);

  useEffect(() => {
    console.log('spalsh screen');

    if (userDetailsRef.current) {
      console.log('splash screen userDetialsRef', userDetailsRef.current);

      firestore()
        .collection('users')
        .where('email', '==', userDetailsRef?.current?.email)
        .get()
        .then(
          (
            res: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
          ) => {
            if (res.docs) {
              console.log('----called in if splash screen------');

              navigate(NavScreenTags.HOME_SCREEN);
              console.log(res.docs[0].data());
            }
          },
        )
        .catch(err => {
          console.log(err);
        });
    }
  }, [userDetailsRef.current]);

  return (
    <View style={{flex: 1}}>
      <Image
        source={Images.SPLASH}
        style={{width: screenWidth, height: screenHeight}}
      />
    </View>
  );
};

export default Splash;
