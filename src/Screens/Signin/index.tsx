import React from 'react';

import {
  View,
  TextInput,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import { styles } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import hamburger from '../../assets/hamburger.png'


export function Signin(){
  return ( 
    <>
    <Header/>
    <View style={styles.container}>
      <Image source={hamburger} style={styles.image} resizeMode="stretch"/>
      <TextInput placeholder="Insira seu nome" style={styles.textInput} autoCompleteType={'username'}/>
      <TextInput placeholder="Insira seu E-mail" style={styles.textInput} autoCompleteType={'email'} keyboardType={'email-address'}/>
      <TextInput placeholder="Insira sua senha" style={styles.textInput} autoCompleteType={'password'}/>
      <Button
        text='Criar conta'
      />
    </View>
    </>
  );
}