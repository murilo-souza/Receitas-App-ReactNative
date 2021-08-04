import React from 'react';
import {
  View
} from 'react-native';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function ButtonAdd({...rest}: RectButtonProps){
  return (
    <RectButton style={styles.btn} {...rest}>
      <MaterialCommunityIcons
        name='plus'
        size={35}
        color={theme.colors.text}
      />
    </RectButton>
  );
}