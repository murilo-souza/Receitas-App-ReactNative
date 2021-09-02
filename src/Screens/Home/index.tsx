import React , {useState, useEffect, useCallback} from 'react';
import {
  View,
  FlatList,
  RefreshControl, Text, Alert
} from 'react-native';

import firebase from '../../Data/firebaseConfig';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

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
  const [data, setData] = useState<any>([])
  const [isRefreshing, setIsRefreshing] = useState(false)

  const [Name, setName] = useState('')

  const navigation = useNavigation()

  const id = firebase.auth().currentUser?.uid
  const username = firebase.firestore().collection('users').doc(id).get().then((item)=>{
    const Name = item.get('Name');
    setName(Name)
    SetLoading(false)
  })

  
  async function LoadRecipes(){
    await firebase.firestore().collection('users').doc(id).collection('Receitas').orderBy('Title', 'asc').get().then((querySnapshot) => {
      const d:any = []
      querySnapshot.forEach((doc)=>{
        const recipes = {
          id: doc.id,
          name: doc.get('Title'),
          description: doc.get('Description'),
          ingredients: doc.get('Ingredients'),
          prepare: doc.get('Prepare'),
        }
        
        d.push(recipes)
        setData(d)
      })
    }).catch((e)=>{
      alert('Erro ao pegar os dados')
    })
  }

  
  function SignOut(){
    firebase.auth().signOut().then(()=>{
      setLogedIn(false)
    });
    
  }
  
  function AlertSignOut() {
    Alert.alert(
      "Sair",
      "Tem certeza que deseja deslogar da conta?",
      [
        {
          text: "Continuar",
          onPress: () => {},
          style: "cancel"
        },
        { text: "Sair", onPress: () => SignOut() }
      ]
    );
  }

  function GoToCreation(){
    navigation.navigate('RecipeCreate')
  }
  
  function GoToDetails(item: any){
    navigation.navigate('RecipeDetails', {item})
  }

  
  useFocusEffect(useCallback(()=>{
    LoadRecipes()
  },[]))
  
  return (
    Loading ? <Load/> :
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <ProfileIcon
            username = {Name}
            onPress={AlertSignOut}
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
            keyExtractor={item => item.id}
            data = {data}
            renderItem={({item})=>
            <ListContent
            title = {item.name}
            text = {item.description}
            onPress = {() => GoToDetails(item) }
            />
          }
          />
        </View>
      </View>
    </Background>
  );
}