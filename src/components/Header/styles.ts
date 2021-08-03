import { StyleSheet } from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});