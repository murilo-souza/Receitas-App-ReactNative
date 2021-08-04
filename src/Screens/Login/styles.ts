import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 125
  },

  textInput: {
    backgroundColor: '#fff',
    width: '90%',
    height: 50,
    marginBottom: 25,
    color: '#222',
    fontSize: 15,
    borderRadius: 10,
    padding: 10,
  },

  createAccount: {
    marginTop: 20,
    color: theme.colors.text,
    fontSize: 17,
  },

  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  }
});