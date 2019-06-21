import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
  containerProduct: {
    alignItems: 'center',
    backgroundColor: colors.white,
    margin: metrics.baseMargin * 2,
    padding: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius,
  },
  image: {
    width: 180,
    height: 285,
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: metrics.baseMargin,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darker,
  },
  brand: {
    fontSize: 12,
    color: colors.gray,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secundary,
  },
  button: {
    marginTop: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.secundary,
    paddingVertical: metrics.baseMargin * 1.25,
    padding: 77,
  },
  textButton: {
    color: colors.white,
  },
  loading: {
    marginTop: 20,
  }
});

export default styles;
