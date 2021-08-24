import React, {useState}from 'react';

import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native'

import firebase from '../../Data/firebaseConfig';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { TextArea } from '../../components/TextArea';
import { TextAreaBig } from '../../components/TextAreaBig';
import { TextAreaDescription } from '../../components/TextAreaDescription';
import { TextAreaTitle } from '../../components/TextAreaTitle';

import { styles } from './styles';

export function RecipeCreate(){
  const navigation = useNavigation()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [prepare, setPrepare] = useState('')

  function createRecipe(){
      const uid = firebase.auth().currentUser?.uid
      firebase.firestore().collection('users').doc(uid).collection('Receitas').doc().set({
        Title: title,
        Description: description,
        Ingredients: ingredients,
        Prepare:prepare,
      })
    navigation.goBack()
      
  }

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <Header
          titleHeader='Criando Receita'
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
              maxLength = {100}
              multiline
              numberOfLines={3}
              onChangeText={description => setDescription(description)}
              value={description}
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Ingredientes</Text>
            <TextArea
              multiline
              numberOfLines={5}
              onChangeText={ingredients => setIngredients(ingredients)}
              value={ingredients}
            />
          </View>
          <View style={[styles.section]}>
            <Text style={styles.title}>Modo de Preparo</Text>
            <TextAreaBig
              multiline
              numberOfLines={5}
              onChangeText={prepare => setPrepare(prepare)}
              value={prepare}
            />
          </View>
          <View style={styles.btn}>
            <Button
              text="Salvar"
              onPress={createRecipe}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}