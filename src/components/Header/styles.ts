import { StyleSheet } from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({  
  title: {
    color: theme.colors.title,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: theme.fonts.title700B
  },
  
  header: {
    width: '100%',
    height: 110,
    paddingTop: getStatusBarHeight(),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  }
});