import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { Background } from '../../components/Background';

import { styles } from './styles';

export function Home(){
  return (
    <Background>
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    </Background>
  );
}