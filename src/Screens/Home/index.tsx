import React , {useState, useEffect} from 'react';
import {
  View,
  FlatList
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
  const [logedIn, setLogedIn] = useState(true)
  const [Loading, SetLoading] = useState(true)
  const [Recipe, setRecipe] = useState([])

  const [Name, setName] = useState('')

  const navigation = useNavigation()

  const id = firebase.auth().currentUser?.uid
  const username = firebase.firestore().collection('users').doc(id).get().then((item)=>{
    const Name = item.get('Name');
    setName(Name)
    SetLoading(false)
  })

  useEffect(()=>{
    firebase.firestore().collection('users').doc(id).collection('Receitas').get().then((item) => {
      let d:any = []
      item.forEach((doc)=>{
        const recipes = {
          id: doc.id,
          name: doc.data().Title,
          description: doc.data().Description,
        }
        d.push(recipes)
      })
      setRecipe(d)
    }).catch((e)=>{
      console.log('Home, recipeData' + e)
    })
  },[])
  
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
          <FlatList
            data = {Recipe}
            renderItem={()=>(
              <ListContent
                title = 'dhhddhhdhd'
                text = 'sshhsshshs'
              />
            )}
            
          />
        </View>
      </View>
    </Background>
  );
}