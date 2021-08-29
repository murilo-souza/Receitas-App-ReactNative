import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView
} from 'react-native';

import { Header } from '../../components/Header';
import {Button} from '../../components/Button'

import { styles } from './styles';
import {useRoute} from '@react-navigation/native'
import { ButtonTrash } from '../../components/ButtonTrash';
import { ButtonEdit } from '../../components/ButtonEdit';

type params ={
  item: any
}

export function RecipeDetails(){
  const route = useRoute()
  const {item} = route.params as params

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
              />
            </View>
            <View style={styles.section}>
              <ButtonTrash
                text = "Excluir"
              />
            </View>
          </View>
      </View>
    </ScrollView>
  );
}
