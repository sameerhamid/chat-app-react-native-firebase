import {useEffect, useRef} from 'react';
import {LocalStorageKeys} from '../../common/utils/LocalStorageKeys';
import LocalStorageUtils from '../../common/utils/LocalStorageUtils';
import {NavScreenTags} from '../../common/constants/NavScreenTags';
import {navigate, replace} from '../../common/utils/NavigatorUtils';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import SplashScreen from 'react-native-splash-screen';
import {AuthModel} from '../../common/model/auth/authModel';
import firestore from '@react-native-firebase/firestore';
import stylesObj, {SplashScreenStyleTypes} from './styles';
interface SpalshScreenVeiwControllerTypes {
  styles: SplashScreenStyleTypes;
}

const useSplashScreenViewController = (): SpalshScreenVeiwControllerTypes => {
  const userDetailsRef = useRef<AuthModel | undefined | void>();
  const styles: SplashScreenStyleTypes = stylesObj();
  useEffect(() => {
    SplashScreen.hide();

    setTimeout(() => {
      if (userDetailsRef.current) {
        firestore()
          .collection('users')
          .where('email', '==', userDetailsRef?.current?.email)
          .get()
          .then(
            (
              res: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
            ) => {
              if (res.docs.length > 0) {
                replace(NavScreenTags.HOME_SCREEN);
              } else {
                replace(NavScreenTags.LOGIN_SCREEEN);
              }
            },
          )
          .catch(err => {
            replace(NavScreenTags.LOGIN_SCREEEN);
          });
      } else {
        replace(NavScreenTags.LOGIN_SCREEEN);
      }
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
  return {styles};
};

export default useSplashScreenViewController;
