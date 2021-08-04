import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  title: {
    color: theme.colors.title,
    fontSize: 20,
    fontFamily: theme.fonts.title700B,
  },

  total:{
    color: theme.colors.text,
    fontFamily: theme.fonts.text400R
  }
});