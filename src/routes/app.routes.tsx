import React from 'react';
import {View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import { Login } from '../Screens/Login';
import {Signin} from '../Screens/Signin'

import { theme } from '../global/styles/theme';


const {Navigator, Screen} = createStackNavigator();

export function AppRoutes(){
  return (
    <Navigator
       headerMode='none'
       screenOptions={{
        cardStyle:{
            backgroundColor: theme.colors.secondary100,
        }
    }}
    >
      <Screen
          name='Login'
          component={Login}
      />

      <Screen
          name='Signin'
          component={Signin}
      />

    </Navigator>
  );
}