import React, {ReactNode} from 'react';
import {View} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient'

import { styles } from './styles';

type Props = {
  children: ReactNode
}

export function Background({children}: Props){
  return (
    <LinearGradient colors={['#723D46' , '#A1858B']} style={styles.container}>
        {children}
    </LinearGradient>
  );
}