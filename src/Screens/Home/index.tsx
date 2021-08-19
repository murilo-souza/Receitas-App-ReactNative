import React , {useState} from 'react';
import {
  View,
  ScrollView
} from 'react-native';

import firebase from '../../Data/firebaseConfig';

import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { ProfileIcon } from '../../components/ProfileIcon';
import {ButtonAdd} from '../../components/ButtonAdd'
import { HeaderList } from '../../components/HeaderList';
import { ListContent } from '../../components/ListContent';
import {Load} from '../../components/Load'

import { styles } from './styles';  

export function Home(){
  const [logedIn, setLogedIn] = useState(false)
  const [Loading, SetLoading] = useState(true)

  const [Name, setName] = useState('')

  const navigation = useNavigation()

  const id = firebase.auth().currentUser?.uid
  const username = firebase.firestore().collection('users').doc(id).get().then((item)=>{
    const Name = item.get('Name');
    console.log(Name)
    setName(Name)
    SetLoading(false)
  })
  
   function SignOut(){
    firebase.auth().signOut().then(()=>{
      alert('Deslogado com sucesso');
      setLogedIn(false)

    }).catch(function (error){
      alert('Deslogado com sucesso')
    });
    
  }

  function GoToCreation(){
    navigation.navigate('RecipeCreate')
  }

  function GoToDetails(){
    navigation.navigate('RecipeDetails')
  }

  return (
    Loading ? <Load/> :
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <ProfileIcon
            username = {Name}
            onPress={SignOut}
          />
          <ButtonAdd
            onPress={GoToCreation}
          />
        </View>
        <View style={styles.listHeader}>
          <HeaderList/>
        </View>
        <View style={styles.listContent}>
          <ListContent
            title='Feijoada'
            text='Uma breve receita de como fazer uma feijoada magra'
            onPress={GoToDetails}
          />
          <ListContent
            title='Pão de Cebola'
            text='Receita de familia do pão de cebola da minha vó'
          />
          <ListContent
            title='Pão de Cebola'
            text='Receita de familia do pão de cebola da minha vó'
          />
        </View>
      </View>
    </Background>
  );
}