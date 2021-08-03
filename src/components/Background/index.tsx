import React, {ReactNode} from 'react';
import {View} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient'

import { styles } from './styles';
import {theme} from '../../global/styles/theme'

type Props = {
  children: ReactNode
}

export function Background({children}: Props){
  const {secondary100, secondary20} = theme.colors;

  return (
    <LinearGradient colors={[secondary100 , secondary20]} style={styles.container}>
        {children}
    </LinearGradient>
  );
}