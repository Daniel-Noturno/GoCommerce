import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerInfo: {
    flex: 1,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  number: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: metrics.baseRadius,
    borderColor: colors.light,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    paddingVertical: 4,
    width: 40,
  },
  image: {
    width: 40,
    height: 60,
  },
  icon: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
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
