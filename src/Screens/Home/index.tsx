import React from 'react';
import {
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { ProfileIcon } from '../../components/ProfileIcon';
import {ButtonAdd} from '../../components/ButtonAdd'
import { HeaderList } from '../../components/HeaderList';
import { ListContent } from '../../components/ListContent';

import { styles } from './styles';

export function Home(){
  const navigation = useNavigation()

  function GoToCreation(){
    navigation.navigate('RecipeCreate')
  }

  function GoToDetails(){
    
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <ProfileIcon/>
          <ButtonAdd
            onPress={GoToCreation}
          />
        </View>
        <View style={styles.listHeader}>
          <HeaderList/>
        </View>
        <View style={styles.listContent}>
          <ListContent
            title='Feijoada'
            text='Uma breve receita de como fazer uma feijoada magra'
          />
          <ListContent
            title='Pão de Cebola'
            text='Receita de familia do pão de cebola da minha vó'
          />
        </View>
      </View>
    </Background>
  );
}