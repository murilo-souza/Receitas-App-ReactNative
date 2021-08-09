import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

  contentText: {
    flexDirection: 'column',
    marginLeft: 20,
    paddingRight: 30,
  },

  title: {
    fontSize: 20,
    fontFamily: theme.fonts.title500M,
    color: theme.colors.title,
    marginBottom: 2
  },

  text: {
    fontSize: 15,
    fontFamily: theme.fonts.text400R,
    color: theme.colors.text,
  },
});