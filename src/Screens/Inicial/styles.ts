import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
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
    marginTop: -90,
    fontFamily: theme.fonts.title700B
  },

  subTitle: {
    fontSize: 17,
    color: theme.colors.text,
    marginBottom: 30,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    fontFamily: theme.fonts.text400R
  },
});