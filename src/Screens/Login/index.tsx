import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Modal
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { styles } from './styles';

import firebase from '../../Data/firebaseConfig'

import {Button} from '../../components/Button';
import {Background} from '../../components/Background'
import { AlertPassword } from '../../components/AlertPassword';

import Chefe from '../../assets/cook.png'

export function Login(){
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logedIn, setLogedIn] = useState(false)
  const [visible, setVisible] = useState(false)

  function GoToSignIn(){
    navigation.navigate('Signin');
  };

    function LogIn(){
    firebase.auth().signInWithEmailAndPassword(email, password).then(async (data) => {
    const uid = data.user?.uid;
    try {
      const doc = await firebase.firestore().doc(`users/${uid}`).get()
    } catch (error) {
      
    }
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
  setLogedIn(true);
  }

  function resetPassword() {
    if(email.length < 3) {
      alert('Coloque o email para resetar a senha')
    }else{
      firebase.auth().sendPasswordResetEmail(email)
    }
  }

  return (
    <Background>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.container}>
            <Image source={Chefe} style={styles.image} resizeMode="stretch"/>
            <TextInput placeholder= "Insira seu E-mail" style={styles.textInput} onChangeText={email => setEmail(email)} value={email}/>
            <TextInput placeholder= "Insira sua senha" style={styles.textInput} onChangeText={password => setPassword(password)} value={password} secureTextEntry={true}/>
            <Button
              text="Entrar"
              onPress={LogIn}
            />
            <TouchableOpacity onPress = {resetPassword}><Text style={styles.forgotPassword}>Esqueci minha senha</Text></TouchableOpacity>
            <TouchableOpacity onPress={GoToSignIn}><Text style={styles.createAccount}>Criar conta</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
}

