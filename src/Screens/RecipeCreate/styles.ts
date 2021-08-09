import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 20,
    color: theme.colors.title,
    textAlign: 'center',
    marginBottom: 20,
  }
});