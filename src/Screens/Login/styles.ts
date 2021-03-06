import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 125,
    paddingLeft: 20,
    paddingRight: 20,
  },

  textInput: {
    backgroundColor: '#fff',
    width: '100%',
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

  forgotPassword: {
    marginTop: 20,
    color: theme.colors.text,
    fontSize: 14
  },

  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  
});