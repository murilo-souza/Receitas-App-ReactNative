import React from 'react';

import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Text
} from 'react-native';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { TextAreaTitle } from '../../components/TextAreaTitle';

import { styles } from './styles';

export function RecipeEdit(){
  return (
    <KeyboardAvoidingView>
        <ScrollView>
            <Header
                titleHeader='Editar receita'
            />
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.title}>Título</Text>
                    <TextAreaTitle/>
                       
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}