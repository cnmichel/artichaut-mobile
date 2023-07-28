import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  cover: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'Cinzel Decorative',
    color: 'white',
    marginBottom: 30
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 120
  },
  button: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#00B561',
    color: 'white',
    textTransform: 'uppercase'
  }
});