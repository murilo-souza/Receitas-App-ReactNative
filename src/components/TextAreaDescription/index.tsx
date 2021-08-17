import React from 'react';

import {TextInput, TextInputProps} from 'react-native';

import { styles } from './styles';

export function TextAreaDescription({...rest}: TextInputProps){
  return (
    <TextInput
        style={styles.container}
        {...rest}
    />
  );
}