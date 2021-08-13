import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'

import { styles } from './styles';

export function ProfileIcon({...rest}: RectButtonProps){
  return (
    <RectButton style={styles.container} {...rest}> 
      <View style={styles.boxProfile}>

      </View>
      <Text style={styles.title}>Ola, Murilo</Text>
    </RectButton>
  );
}