import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'

import { styles } from './styles';

type Props = RectButtonProps & {
  title:string,
  text:string,
}


export function ListContent({title, text, ...rest}: Props){
  

  return (
    <>
      <RectButton  {...rest}>
        <View style={styles.container}>
          <View style={styles.contentText}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
      </RectButton>
      
    </>
  );
}