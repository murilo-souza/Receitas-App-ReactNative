import React, {ReactNode} from 'react';
import {View} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient'

import { styles } from './styles';

type Props = {
  children: ReactNode
}

export function Background({children}: Props){
  return (
    <LinearGradient colors={['#fff' , '#0f5']}>
        {children}
    </LinearGradient>
  );
}