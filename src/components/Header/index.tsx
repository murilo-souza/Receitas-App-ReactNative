import React from 'react';
import {View} from 'react-native';

import {BorderlessButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import {theme} from '../../global/styles/theme'
import { styles } from './styles';

export function Header(){
    const navigation = useNavigation();
    const {title} = theme.colors;

    function HandlerGoBack(){
        navigation.goBack();
    }

  return (
    <View style={styles.container}>
        <BorderlessButton onPress={HandlerGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={title}
                />
            </BorderlessButton>
    </View>
  );
}