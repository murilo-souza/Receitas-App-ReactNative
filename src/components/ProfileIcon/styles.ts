import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  boxProfile: {
    backgroundColor: '#4665',
    width: 60,
    height: 60,
    borderRadius: 10,
  },

  title: {
    color: theme.colors.title,
    fontFamily: theme.fonts.title700B,
    fontSize: 20,
    marginLeft: 15,
  }
});