import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';


import {RectButton, RectButtonProps} from 'react-native-gesture-handler'

import { styles } from './styles';
import Cook from '../../assets/cook.png'

type Props = RectButtonProps & {
  username: string
  
}

export function ProfileIcon({username, ...rest}: Props){
  

  return (
    <RectButton style={styles.container} {...rest}> 
      <View style={styles.boxProfile}>
        <Image source={Cook} width={30} height={30}/>
      </View>
      <Text style={styles.title}>Ola, {username}</Text>
    </RectButton>
  );
}
