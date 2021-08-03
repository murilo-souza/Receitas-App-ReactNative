import React from 'react';

import {
  TouchableOpacity,
  Text
} from 'react-native';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'

import { styles } from './styles';

type Props = RectButtonProps & {
    text: string;
}

export function Button({text, ...rest}: Props){
  return (
    <RectButton style={styles.btnEnter} {...rest}>
        <Text style={styles.btnText}>{text}</Text>
    </RectButton>
  );
}