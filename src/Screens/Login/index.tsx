import React, {useState} from 'react';
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

import firebase from '../../Data/firebaseConfig'

import {Button} from '../../components/Button';
import {Background} from '../../components/Background'
import { Load } from '../../components/Load';

import Chefe from '../../assets/cook.png'

export function Login(){
  const [Loading, setLoading] = useState(true)
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logedIn, setLogedIn] = useState(false)

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

  return (
    <Background>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.container}>
            <Image source={Chefe} style={styles.image} resizeMode="stretch"/>
            <TextInput placeholder= "Insira seu E-mail" style={styles.textInput} onChangeText={email => setEmail(email)} value={email}/>
            <TextInput placeholder= "Insira sua senha" style={styles.textInput} onChangeText={password => setPassword(password)} value={password}/>
            <Button
              text="Entrar"
              onPress={LogIn}
            />
            <TouchableOpacity onPress={GoToSignIn}><Text style={styles.createAccount}>Criar conta</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
}

