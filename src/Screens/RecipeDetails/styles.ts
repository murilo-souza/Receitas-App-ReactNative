import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 25,
    color: theme.colors.title,
    fontFamily: theme.fonts.title700B,
    justifyContent: 'flex-start',
    marginBottom: 15,
  },

  text: {
    fontSize: 17,
    color: theme.colors.text,
    fontFamily: theme.fonts.text300L,
    justifyContent: 'flex-start',
    marginBottom: 10
  },

  section:{
    marginBottom: 20,
  }
});