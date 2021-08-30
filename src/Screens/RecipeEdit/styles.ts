import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 20,
    color: theme.colors.title,
    marginBottom: 20,
    justifyContent: 'flex-start',
    fontFamily: theme.fonts.title700B
  },
  
  section: {
    marginBottom: 40,
  },

  btn:{
    alignItems: 'center',
  }
});