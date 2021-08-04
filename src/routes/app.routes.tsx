import React from 'react';
import {View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import {Inicial} from '../Screens/Inicial'
import { Login } from '../Screens/Login';
import {Signin} from '../Screens/Signin';
import { Home } from '../Screens/Home';

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
          name='Inicial'
          component={Inicial}
      />

      <Screen
          name='Login'
          component={Login}
      />

      <Screen
          name='Signin'
          component={Signin}
      />

      <Screen
          name='Home'
          component={Home}
      />

    </Navigator>
  );
}