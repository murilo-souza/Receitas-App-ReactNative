import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import { styles } from './styles';

import {Button} from '../../components/Button';

import Hotdog from '../../assets/hotdog-s-bg.png'
import { Signin } from '../Signin';

export function Login(){

  function GoToSignIn(){

  }

  return (
    <View style={styles.container}>
      <Image source={Hotdog} style={styles.image} resizeMode="stretch"/>
      <TextInput placeholder= "Insira seu E-mail" style={styles.textInput}/>
      <TextInput placeholder= "Insira sua senha" style={styles.textInput}/>
      <Button
        text="Entrar"
        onPress={() =>{}}
      />
      <TouchableOpacity onPress={()=>{}}><Text style={styles.createAccount}>Criar conta</Text></TouchableOpacity>
    </View>
  
  );
}