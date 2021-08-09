import React from 'react';
import {View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {BorderlessButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import {theme} from '../../global/styles/theme'
import { styles } from './styles';

type Props = {
  titleHeader?: string
}

export function Header({titleHeader}: Props){
    const { secondary100, secondary60} = theme.colors;
    const navigation = useNavigation();
    const {title} = theme.colors;

    function HandlerGoBack(){
        navigation.goBack();
    }

  return (
    <LinearGradient
      colors={[secondary100, secondary60]}
    >
      <View style={styles.container}>
        <BorderlessButton onPress={HandlerGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={title}
                />
        </BorderlessButton>
        <Text style={styles.title}>{titleHeader}</Text>
      </View>
    </LinearGradient>
  );
}