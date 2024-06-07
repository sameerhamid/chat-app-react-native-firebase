import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../container/auth/login';
import {navigationRef} from '../utils/NavigatorUtils';
import {NavScreenTags} from '../constants/NavScreenTags';
import SignUp from '../../container/auth/signUp';
import {DarkTheme} from '../themes/DarkTheme';
import {LightTheme} from '../themes/LightTheme';
import {useColorScheme} from 'react-native';
import Splash from '../../container/root/splash';
import HomeScreen from '../../container/home/homeScreen';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const colorSheme = useColorScheme();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorSheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={NavScreenTags.SPLASH_SCREEN} component={Splash} />
        <Stack.Screen name={NavScreenTags.LOGIN_SCREEEN} component={Login} />
        <Stack.Screen name={NavScreenTags.SIGNUP_SCREEN} component={SignUp} />
        <Stack.Screen name={NavScreenTags.HOME_SCREEN} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
