import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

export function ProfileIcon(){
  return (
    <View style={styles.container}> 
      <View style={styles.boxProfile}>

      </View>
      <Text style={styles.title}>Ola, Murilo</Text>
    </View>
  );
}