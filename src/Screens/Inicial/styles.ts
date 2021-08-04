import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
      width: 420,
      height: 420,
  },

  title: {
    fontSize: 40,
    color: theme.colors.title,
    marginBottom: 20,
    textAlign: 'center',
    marginTop: -90
  },

  subTitle: {
    fontSize: 17,
    color: theme.colors.text,
    marginBottom: 30,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  },
});