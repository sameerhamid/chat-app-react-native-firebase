import {
  StackActions,
  DrawerActions,
  NavigationContainerRefWithCurrent,
  ParamListBase,
  Route,
} from '@react-navigation/native';

import * as React from 'react';

export const navigationRef: React.RefObject<
  NavigationContainerRefWithCurrent<ParamListBase>
> = React.createRef();

/**
 * navigation handler
 * @param name --screen name where to navigate
 * @param params
 */
export const navigate = (name: string, params?: object): void => {
  navigationRef.current?.navigate(name, params);
};

/**
 * empty stack with navigation
 * @param routeName
 * @param params
 */
export const reset = (routeName: string, params?: object): void => {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: routeName, params}],
  });
};

/**
 * drawer navigation toggle handler
 * @param routeName
 * @param params
 */
export const toggle = (): void => {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
};

/**
 * go back to previous screen
 */
export const goBack = (): void => {
  navigationRef.current?.dispatch(StackActions.pop());
};

/**
 * replace current screen with new one
 * @param routeName
 */
export const replace = (routeName: string): void => {
  navigationRef.current?.dispatch(StackActions.replace(routeName));
};

/**
 * reset the screen as per index
 * @param routeName
 * @param index --to which index to clear stack
 */
export const resetWithIndex = (routeName: string, index?: number): void => {
  navigationRef.current?.reset({
    index: index || 0,
    routes: [{name: routeName}],
  });
};

export const getCurrentScreenName = (): Route<string> | undefined =>
  navigationRef.current?.getCurrentRoute();
