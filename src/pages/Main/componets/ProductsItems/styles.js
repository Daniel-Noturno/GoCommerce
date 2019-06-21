import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: (metrics.screamWidth - 50) / 2,
    padding: metrics.baseMargin,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
  },
  image: {
    alignSelf: 'center',
    height: 180,
    width: 100,
  },
  info: {
    paddingVertical: metrics.baseMargin,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.darker,
  },
  brand: {
    fontSize: 11,
    color: colors.gray,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.secundary,
  },
});

export default styles;
