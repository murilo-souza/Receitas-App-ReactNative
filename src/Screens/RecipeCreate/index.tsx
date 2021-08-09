import React from 'react';

import {
  View,
  Text
} from 'react-native';
import { Button } from '../../components/Button';

import { Header } from '../../components/Header';
import { TextArea } from '../../components/TextArea';
import { TextAreaBig } from '../../components/TextAreaBig';

import { styles } from './styles';

export function RecipeCreate(){
  return (
    <>
      <Header
        titleHeader='Criando Receita'
      />
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>Ingredientes</Text>
          <TextArea
            multiline
            numberOfLines={5}
          />
        </View>
        <View style={[styles.section]}>
          <Text style={styles.title}>Modo de Preparo</Text>
          <TextAreaBig
            multiline
            numberOfLines={5}
          />
        </View>
        <View style={styles.btn}>
          <Button
            text="Salvar"
          />
        </View>
      </View>
    </>
  );
}