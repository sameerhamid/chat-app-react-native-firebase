import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../container/auth/login';
import {navigationRef} from '../utils/NavigatorUtils';
import {NavScreenTags} from '../constants/NavScreenTags';
import SignUp from '../../container/auth/signUp';
import {DarkTheme} from '../themes/DarkTheme';
import Splash from '../../root/splash';
// import {DarkTheme} from '../themes/DarkTheme';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  console.log(DarkTheme);

  return (
    <NavigationContainer ref={navigationRef} theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={NavScreenTags.SPLASH_SCREEN} component={Splash} />
        <Stack.Screen name={NavScreenTags.LOGIN_SCREEEN} component={Login} />
        <Stack.Screen name={NavScreenTags.SIGNUP_SCREEN} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
