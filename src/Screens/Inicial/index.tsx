import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { Button} from '../../components/Button';
import {Background} from '../../components/Background';

import Cook from '../../assets/cook4.png'

export function Inicial(){
    const navigation = useNavigation();

    function GoToLogIn(){
        navigation.navigate('Login');
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image source={Cook} style={styles.image} resizeMode="stretch"/>
                <Text style={styles.title}>
                    Salve{'\n'}
                    suas Receitas{'\n'} 
                    de{'\n'} 
                    Família
                </Text>
                <Text style={styles.subTitle}>Salve receitas criadas pela sua família e deixe-as disponíveis para todos</Text>
                <Button
                text="Entrar"
                onPress={GoToLogIn}
                />
            </View>
        </Background>
    );
}