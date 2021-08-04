import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

export function HeaderList(){
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Suas Receitas</Text>
        <Text style={styles.total}>Total 5</Text>
    </View>
  );
}