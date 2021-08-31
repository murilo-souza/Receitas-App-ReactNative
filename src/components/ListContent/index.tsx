import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { ButtonEdit } from '../ButtonEdit';
import { Divider } from '../Divider';

import { ListIcon } from '../ListIcon';

import { styles } from './styles';

type Props = RectButtonProps & {
  title:string,
  text:string,
}


export function ListContent({title, text, ...rest}: Props){
  

  return (
    <>
      <RectButton style={styles.container} {...rest}>
        <ListIcon/>
        <View style={styles.contentText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </RectButton>
      <Divider/>
    </>
  );
}