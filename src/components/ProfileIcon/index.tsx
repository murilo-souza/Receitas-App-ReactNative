import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';


import {RectButton, RectButtonProps} from 'react-native-gesture-handler'

import { styles } from './styles';
import CookProfile from '../../assets/cookProfile.png'

type Props = RectButtonProps & {
  username: string
  
}

export function ProfileIcon({username, ...rest}: Props){
  

  return (
    <RectButton style={styles.container} {...rest}> 
      <View style={styles.boxProfile}>
        <Image source={CookProfile} width={40} height={40}/>
      </View>
      <Text style={styles.title}>Ola, {username}</Text>
    </RectButton>
  );
}
