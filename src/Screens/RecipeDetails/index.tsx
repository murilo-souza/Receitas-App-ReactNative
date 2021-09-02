import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  Alert
} from 'react-native';

import { Header } from '../../components/Header';
import { styles } from './styles';
import {useRoute, useNavigation} from '@react-navigation/native'
import { ButtonTrash } from '../../components/ButtonTrash';
import { ButtonEdit } from '../../components/ButtonEdit';
import firebase from '../../Data/firebaseConfig'

type params ={
  item: any
}

export function RecipeDetails(){
  const navigation = useNavigation() 
  const route = useRoute()
  const {item} = route.params as params

  function DeleteRecipe(){
    const uid = firebase.auth().currentUser?.uid
    firebase.firestore().collection('users').doc(uid).collection('Receitas').doc(item.id).delete()
    navigation.navigate('Home')
  }

  function AlertDelete(){
    Alert.alert(
      "Deletar receita",
      "Tem certeza que deseja excluir essa receita?",
      [
        {
          text: "Manter",
          onPress: () => {},
          style: "cancel"
        },
        { text: "Excluir", onPress: () => DeleteRecipe() }
      ]
    );
  }
  
  function EditRecipe(item: any) {
    navigation.navigate('RecipeEdit', {item})
  }

  return (
    <ScrollView>
      <View>
          <Header
            titleHeader="Detalhes da receita"
          />
          <View style={styles.container}>
            <View style={styles.section}>
              <Text style={styles.title}>Ingredientes</Text>
              <Text style={styles.text}>{item.ingredients}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.title}>Modo de preparo</Text>
              <Text style={styles.text}>{item.prepare}</Text>
            </View>
            <View style={styles.section}>
              <ButtonEdit
                text="Editar"
                onPress={()=>EditRecipe(item)}
              />
            </View>
            <View style={styles.section}>
              <ButtonTrash
                text = "Excluir"
                onPress = {AlertDelete}
              />
            </View>
          </View>
      </View>
    </ScrollView>
  );
}
