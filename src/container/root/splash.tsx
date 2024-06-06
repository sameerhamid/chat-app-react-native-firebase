import {useEffect} from 'react';
import {NavScreenTags} from '../../common/constants/NavScreenTags';
import {navigate} from '../../common/utils/NavigatorUtils';
import {Image, View} from 'react-native';
import {Images} from '../../common/constants/images';
import {screenHeight, screenWidth} from '../../common/constants/dimensions';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate(NavScreenTags.SIGNUP_SCREEN);
    }, 2000);
  }, []);
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
