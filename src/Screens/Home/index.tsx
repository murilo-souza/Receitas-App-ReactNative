import React , {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  RefreshControl
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

  useEffect(()=>{
    firebase.firestore().collection('users').doc(id).collection('Receitas').get().then((querySnapshot) => {
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
        console.log(d)
        setData(d)
      })
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

  function GoToDetails(item: any){
    navigation.navigate('RecipeDetails', {item})
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
            keyExtractor={item => item.id}
            data = {data}
            renderItem={({item})=>
              <ListContent
                title = {item.name}
                text = {item.description}
                onPress = {() => GoToDetails(item)}
              />
            }
            refreshControl={<RefreshControl refreshing={isRefreshing} />}
          />
        </View>
      </View>
    </Background>
  );
}