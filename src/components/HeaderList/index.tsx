import React, {useState} from 'react';

import {
  View,
  Text
} from 'react-native';

import firebase from '../../Data/firebaseConfig'

import { styles } from './styles';


export function HeaderList(){
  const [size, setSize] = useState(0)
  const uid = firebase.auth().currentUser?.uid
  firebase.firestore().collection('users').doc(uid).collection('Receitas').get().then(snap =>{
    const size = snap.size
    setSize(size)
  });
  

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Suas Receitas</Text>
        <Text style={styles.total}>Total {size}</Text>
    </View>
  );
}