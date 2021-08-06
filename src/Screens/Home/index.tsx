import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { Background } from '../../components/Background';
import { ProfileIcon } from '../../components/ProfileIcon';
import {ButtonAdd} from '../../components/ButtonAdd'
import { HeaderList } from '../../components/HeaderList';
import { ListContent } from '../../components/ListContent';

import { styles } from './styles';

export function Home(){
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <ProfileIcon/>
          <ButtonAdd/>
        </View>
        <View style={styles.listHeader}>
          <HeaderList/>
        </View>
        <View style={styles.listContent}>
          <ListContent
            title='Feijoada'
            text='Uma breve receita de como fazer uma feijoada magra'
          />
        </View>
      </View>
    </Background>
  );
}