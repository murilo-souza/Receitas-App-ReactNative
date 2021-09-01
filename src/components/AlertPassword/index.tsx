import React, {useState} from 'react';

import {
  View,
  Alert,
  Text,
  TouchableOpacity
} from 'react-native';


import { styles } from './styles';

type Props = {
    text: string;
}

export function AlertPassword(){
    return (
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          )
    );
}