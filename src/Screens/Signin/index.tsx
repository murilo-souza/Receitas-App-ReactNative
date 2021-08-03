import React from 'react';

import {
  View,
  TextInput,
  Image,
} from 'react-native';

import { styles } from './styles';

import { Button } from '../../components/Button';
import hamburger from '../../assets/ham-removebg-preview.png'


export function Signin(){
  return (
    <View style={styles.container}>
      <Image source={hamburger} style={styles.image} resizeMode="stretch"/>
      <TextInput placeholder="Insira seu nome" style={styles.textInput}/>
      <TextInput placeholder="Insira seu E-mail" style={styles.textInput}/>
      <TextInput placeholder="Insira sua senha" style={styles.textInput}/>
      <Button
        text='Criar conta'
      />
    </View>
  );
}