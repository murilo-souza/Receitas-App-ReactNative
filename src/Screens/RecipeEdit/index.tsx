import React, {useState} from 'react';

import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Text
} from 'react-native';

import { Header } from '../../components/Header';
import { TextAreaTitle } from '../../components/TextAreaTitle';
import {TextAreaDescription} from '../../components/TextAreaDescription'
import {TextAreaBig} from '../../components/TextAreaBig'
import { ButtonEdit } from '../../components/ButtonEdit';
import { TextArea } from '../../components/TextArea';

import {useRoute, useNavigation} from '@react-navigation/native'
import firebase from '../../Data/firebaseConfig';

import { styles } from './styles';

type params ={
  item: any
}

export function RecipeEdit(){
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()
  const route = useRoute()
  const {item} = route.params as params
  const uid = firebase.auth().currentUser?.uid
  const [title, setTitle] = useState(item.name)
  const [description, setDescription] = useState(item.description)
  const [ingredients, setIngredients] = useState(item.ingredients)
  const [prepare, setPrepare] = useState(item.prepare)

  function updateRecipe(){
      firebase.firestore().collection('users').doc(uid).collection('Receitas').doc(item.id).update({
        Title: title,
        Description: description,
        Ingredients: ingredients,
        Prepare:prepare,
      })
      setLoading(true)
      navigation.navigate('Home', {loading})
  }

  return (
    <KeyboardAvoidingView>
        <ScrollView>
            <Header
                titleHeader='Editar receita'
            />
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.title}>Título</Text>
                    <TextAreaTitle
                      maxLength={20}
                      onChangeText={title => setTitle(title)}
                      value={title}
                    />
                </View>
                <View style={styles.section}>
                  <Text style={styles.title}>Descrição</Text>
                  <TextAreaDescription
                    maxLength={100}
                    multiline
                    onChangeText={description => setDescription(description)}
                    value={description}
                  />
                </View>
                <View style={styles.section}>
                  <Text style={styles.title}>Ingredientes</Text>
                  <TextArea
                    numberOfLines={5}
                    multiline
                    onChangeText={ingredients => setIngredients(ingredients)}
                    value={ingredients}
                  />
                </View>
                <View style={styles.section}>
                  <Text style={styles.title}>Modo de preparo</Text>
                  <TextAreaBig
                  numberOfLines={5}
                  multiline
                  onChangeText={prepare => setPrepare(prepare)}
                  value={prepare}
                  />
                </View>
                <View style={styles.btn}>
                  <ButtonEdit
                    text="Editar"
                    onPress={updateRecipe}
                  />
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}