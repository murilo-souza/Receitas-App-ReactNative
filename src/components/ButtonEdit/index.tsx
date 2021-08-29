import React from 'react';

import {
  Text
} from 'react-native';

import { RectButton, RectButtonProps} from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
    text: string;
}
export function ButtonEdit({text, ...rest}: Props){
  return (
    <RectButton {...rest} style={styles.btnEnter}>
        <Text style={styles.btnText}>{text}</Text>
    </RectButton>
  );
}