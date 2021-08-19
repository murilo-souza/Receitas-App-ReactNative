import React, {useState, useEffect} from 'react';

import {
  View,
  Text
} from 'react-native';
import firebase from '../../Data/firebaseConfig'

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'

import { styles } from './styles';


export function ProfileIcon({...rest}: RectButtonProps){
  const [name, setName] = useState('')
  return (
    <RectButton style={styles.container} {...rest}> 
      <View style={styles.boxProfile}>

      </View>
      <Text style={styles.title}>Ola, {}</Text>
    </RectButton>
  );
}