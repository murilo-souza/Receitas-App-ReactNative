import React from 'react';

import {
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';

import { styles } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import {Background} from '../../components/Background';

import ChefeSigin from '../../assets/cook5.png'


export function Signin(){
  return ( 
    <Background>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>    
          <Header/>
          <View style={styles.container}>
            <Image source={ChefeSigin} style={styles.image} resizeMode="stretch"/>
            <TextInput placeholder="Insira seu nome" style={styles.textInput} autoCompleteType={'username'}/>
            <TextInput placeholder="Insira seu E-mail" style={styles.textInput} autoCompleteType={'email'} keyboardType={'email-address'}/>
            <TextInput placeholder="Insira sua senha" style={styles.textInput} autoCompleteType={'password'}/>
            <Button
              text='Criar conta'
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>  
  );
}