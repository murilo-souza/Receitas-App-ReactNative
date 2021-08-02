import React from 'react';

import {
  View,
  TextInput
} from 'react-native';

import { styles } from './styles';

import {Button} from '../../components/Button';
import {Background} from '../../components/Background';

export function Login(){
  return (
    <Background>  
      <View style={styles.container}>
        <TextInput placeholder= "Insira seu E-mail" style={styles.textInput}/>
        <TextInput placeholder= "Insira sua senha" style={styles.textInput}/>
        <Button
          text="Entrar"
        />
      </View>
    </Background>
  );
}