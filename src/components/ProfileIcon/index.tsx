import React, {useState, useEffect} from 'react';

import {
  View,
  Text
} from 'react-native';
import firebase from '../../Data/firebaseConfig'

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'

import { styles } from './styles';

type Props =RectButtonProps & {
  username: string
}

export function ProfileIcon({username, ...rest}: Props){
  

  return (
    <RectButton style={styles.container} {...rest}> 
      <View style={styles.boxProfile}>

      </View>
      <Text style={styles.title}>Ola, {username}</Text>
    </RectButton>
  );
}

/*const [NameUser, SetNameUser] = useState('')
  const id = firebase.auth().currentUser?.uid
  console.log(id)
  const username = firebase.firestore().collection('users').doc(id).get().then((item)=>{
    const Name = item.get('Name');
    console.log(Name)
    SetNameUser(Name)
  })*/
  