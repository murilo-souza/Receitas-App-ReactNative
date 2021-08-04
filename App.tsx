import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import {useFonts} from 'expo-font'
import {Roboto_700Bold, Roboto_400Regular, Roboto_300Light, Roboto_500Medium} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'

import { Background } from './src/components/Background';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_300Light
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes/>
    </Background>
  );
}
