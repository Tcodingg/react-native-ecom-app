import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  navTitle: {
    fontSize: 20,
    marginLeft: 10,
    textTransform: 'capitalize',
  },
  errorMessage: {
    textAlign: 'center',
    marginTop: 5,
    position: 'absolute',
    bottom: -20,
    width: '100%',
  },

  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 40,
    position: 'relative',
    alignItems: 'stretch',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
});
