import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { Header } from '../../components/Header';

import { styles } from './styles';

export function RecipeCreate(){
  return (
    <>
      <Header
        titleHeader='Criando Receita'
      />
      <View style={styles.container}>
        <Text style={styles.title}>Ingredientes</Text>
        
      </View>
    </>
  );
}