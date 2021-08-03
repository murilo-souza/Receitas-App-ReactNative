import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  btnEnter: {
    backgroundColor: theme.colors.primary,
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  btnText: {
    textAlign: 'center',
    color: theme.colors.title,
    fontSize: 17,
  }
});