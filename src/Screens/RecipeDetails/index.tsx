import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  FlatList
} from 'react-native';

import { Header } from '../../components/Header';
import { Load } from '../../components/Load';

import { styles } from './styles';

import firebase from '../../Data/firebaseConfig';

export function RecipeDetails(){
  const [ingredients, setIngredients] = useState('')
  const [prepare, setPrepare] = useState('')
  const [docData, setDocData] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const id = firebase.auth().currentUser?.uid
  useEffect(()=>{
    firebase.firestore().collection('users').doc(id).collection('Receitas').get().then((item)=>{
      const c:any = []
      item.forEach((doc)=>{
        const details ={
          id: doc.id,
          ingredients: doc.get('Ingredients'),
          prepare: doc.get('Prepare'),
        }
        c.push(details);
        setDocData(c)
        setLoading(false)
      })
    })
  },[])

  return (
    loading ? <Load/> :
    <View>
        <Header
          titleHeader="Detalhes da receita"
        />
        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.title}>Ingredientes</Text>
            <FlatList
            keyExtractor={item => item.id}
            data = {docData}
            renderItem={({item})=>
            <Text style={styles.text}>{item.ingredients}</Text>
          }
            
          />
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Modo de preparo</Text>
            <Text style={styles.text}>{prepare}</Text>
          </View>
        </View>
    </View>
  );
}
