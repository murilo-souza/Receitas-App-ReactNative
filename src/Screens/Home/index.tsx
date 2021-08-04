import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { Background } from '../../components/Background';
import { ProfileIcon } from '../../components/ProfileIcon';
import {ButtonAdd} from '../../components/ButtonAdd'
import { HeaderList } from '../../components/HeaderList';

import { styles } from './styles';

export function Home(){
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <ProfileIcon/>
          <ButtonAdd/>
        </View>
        <View style={styles.list}>
          <HeaderList/>
        </View>
      </View>
    </Background>
  );
}