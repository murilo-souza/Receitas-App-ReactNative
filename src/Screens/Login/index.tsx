import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { styles } from './styles';

import {Button} from '../../components/Button';
import {Background} from '../../components/Background'

import Chefe from '../../assets/cook.png'

export function Login(){
  const navigation = useNavigation();

  function GoToSignIn(){
    navigation.navigate('Signin');
  };

  function GoToHome(){
    navigation.navigate('Home');
  }

  return (
    <Background>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.container}>
            <Image source={Chefe} style={styles.image} resizeMode="stretch"/>
            <TextInput placeholder= "Insira seu E-mail" style={styles.textInput}/>
            <TextInput placeholder= "Insira sua senha" style={styles.textInput}/>
            <Button
              text="Entrar"
              onPress={GoToHome}
            />
            <TouchableOpacity onPress={GoToSignIn}><Text style={styles.createAccount}>Criar conta</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
}