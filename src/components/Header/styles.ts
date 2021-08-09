import { StyleSheet } from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    marginLeft: 87,
    color: theme.colors.title,
    fontSize: 20,
  }
});