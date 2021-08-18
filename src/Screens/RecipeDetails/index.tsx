import React from 'react';

import {
  View,
  Text,
  FlatList,
  SafeAreaView
} from 'react-native';

import { Header } from '../../components/Header';

import { styles } from './styles';

export function RecipeDetails(){
  return (
    <View>
        <Header
          titleHeader="Detalhes da receita"
        />
        <View style={styles.container}>
          
        </View>
    </View>
  );
}
