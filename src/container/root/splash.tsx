import {Image, View} from 'react-native';
import {Images} from '../../common/constants/images';
import useSplashScreenViewController from './splashScreenViewController';

const Splash = () => {
  const {styles} = useSplashScreenViewController();

  return (
    <View style={styles.flex}>
      <Image source={Images.SPLASH} style={styles.splashImage} />
    </View>
  );
};

export default Splash;
