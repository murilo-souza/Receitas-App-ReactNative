import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { ListIcon } from '../ListIcon';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props ={
  title:string,
  text:string,
}

export function ListContent({title, text}: Props){
  const {secondary60, secondary30} = theme.colors

  return (
    <View style={styles.container}>
          <ListIcon/>
          <View style={styles.contentText}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
          </View>
    </View>
  );
}