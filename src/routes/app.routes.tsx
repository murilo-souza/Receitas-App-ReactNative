import React, {useState, useEffect}from 'react';
import {View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import firebase from '../Data/firebaseConfig';

import {Inicial} from '../Screens/Inicial'
import { Login } from '../Screens/Login';
import {Signin} from '../Screens/Signin';
import { Home } from '../Screens/Home';
import { RecipeCreate } from '../Screens/RecipeCreate';
import { RecipeDetails } from '../Screens/RecipeDetails';

import { theme } from '../global/styles/theme';


const {Navigator, Screen} = createStackNavigator();

export function AppRoutes(){
  const [logedIn, setLogedIn] = useState(false)

  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      setLogedIn(true)
    }
  })

  
  return (
    <Navigator
    headerMode='none'
    screenOptions={{
      cardStyle:{
        backgroundColor: theme.colors.secondary100,
      }
    }}
    >
      {
        !logedIn ? (
        <>
          <Screen name='Inicial' component={Inicial}/>
          <Screen name='Login' component={Login}/>
          <Screen name='Signin' component={Signin}/>
        </>
      ) : (
        <>
          <Screen name='Home' component={Home}/>
          <Screen name='RecipeCreate' component={RecipeCreate}/>
          <Screen name='RecipeDetails' component={RecipeDetails}/>
        </>
      )
      }
    </Navigator>
  );
}