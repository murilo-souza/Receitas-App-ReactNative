import { StyleSheet } from 'react-native';
import {getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight() + 40,
    padding: 20,
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  listHeader:{
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  listContent: {
    marginBottom:10,
  }

});