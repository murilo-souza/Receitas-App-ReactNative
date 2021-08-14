import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'

import { styles } from './styles';

type Props = RectButtonProps & {
  username:string,
}

export function ProfileIcon({username, ...rest}: Props){
  return (
    <RectButton style={styles.container} {...rest}> 
      <View style={styles.boxProfile}>

      </View>
      <Text style={styles.title}>Ola, {username}</Text>
    </RectButton>
  );
}