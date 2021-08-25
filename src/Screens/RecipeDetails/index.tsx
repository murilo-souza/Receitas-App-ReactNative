import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
} from 'react-native';

import { Header } from '../../components/Header';
import { Load } from '../../components/Load';

import { styles } from './styles';

import firebase from '../../Data/firebaseConfig';

export function RecipeDetails(){
  const [ingredients, setIngredients] = useState('')
  const [prepare, setPrepare] = useState('')
  const [loading, setLoading] = useState(true)
  const id = firebase.auth().currentUser?.uid

  useEffect(()=>{
    firebase.firestore().collection('users').doc(id).collection('Receitas').get().then((item)=>{
      item.forEach((doc)=>{
        const ingredients = doc.get('Ingredients');
        const prepare = doc.get('Prepare')
        setIngredients(ingredients)
        setPrepare(prepare)
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
            <Text style={styles.text}>{ingredients}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Modo de preparo</Text>
            <Text style={styles.text}>{prepare}</Text>
          </View>
        </View>
    </View>
  );
}
