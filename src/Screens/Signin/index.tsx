import React, {useState} from 'react';

import {
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';

import { styles } from './styles';

import firebase from '../../Data/firebaseConfig'

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import {Background} from '../../components/Background';

import ChefeSigin from '../../assets/cook5.png'


export function Signin(){
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logedIn, setLogedIn] = useState(false)
  
   function SignIn(){
     if(username.length < 3 || email.length < 3 || password.length < 3){
       alert('Verifique se todos os campos estão preenchidos ')
     }

     else if(username.length > 15){
        alert('Por favor, digite um nome com no máximo 15 caracteres')
     }
     else{
       firebase.auth().createUserWithEmailAndPassword( email, password).then(data => {
         const uid = data.user?.uid
         const users = firebase.firestore().collection('users');
         users.doc(uid).set({
           Email: email, Name: username,
         })
       })
       .catch((error) => {
         const errorMessage = error.message;
         alert(errorMessage)
       });
       setLogedIn(true);
     }
  }

  return ( 
    <Background>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>    
          <Header/>
          <View style={styles.container}>
            <Image source={ChefeSigin} style={styles.image} resizeMode="stretch"/>
            <TextInput placeholder="Insira seu nome" style={styles.textInput} autoCompleteType={'username'} onChangeText={username => setUsername(username)} value={username}/>
            <TextInput placeholder="Insira seu E-mail" style={styles.textInput} autoCompleteType={'email'} keyboardType={'email-address'} onChangeText={email => setEmail(email)} value={email}/>
            <TextInput placeholder="Insira sua senha" style={styles.textInput} secureTextEntry={true} onChangeText={password => setPassword(password)} value={password}/>
            <Button
              text='Criar conta'
              onPress={SignIn}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>  
  );
}