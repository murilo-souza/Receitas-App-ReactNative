import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import { Login } from '../Screens/Login';


import {
  View
} from 'react-native';

const {Navigator, Screen} = createStackNavigator();

export function AppRoutes(){
  return (
    <Navigator
       headerMode='none'
    >
        <Screen
            name='Login'
            component={Login}
        />

    </Navigator>
  );
}