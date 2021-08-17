import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: 50,
    backgroundColor: theme.colors.secondary80,
    borderRadius: 10,
    color: theme.colors.text,
    fontFamily: theme.fonts.text300L,
    fontSize: 13,
    marginRight: 3,
    borderWidth: 1,
    borderColor: theme.colors.secondary40,
    paddingHorizontal: 16,
    paddingTop: 16,
    textAlignVertical: 'top',
  }
});