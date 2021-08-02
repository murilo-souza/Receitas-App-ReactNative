import React from 'react';

import {
  TouchableOpacity,
  Text
} from 'react-native';

import { styles } from './styles';

type Props = {
    text: string;
}

export function Button({text}: Props){
  return (
    <TouchableOpacity style={styles.btnEnter}>
        <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}