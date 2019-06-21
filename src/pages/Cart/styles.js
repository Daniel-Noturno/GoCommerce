import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
  flatList: {
    padding: metrics.basePadding,
  },
  totalPriceContainer: {
    backgroundColor: colors.white,
    height: 100,
    alignItems: 'center',
    paddingVertical: 25,
  },
  textSubTotal: {
    color: colors.gray,
    fontSize: 14,
    paddingBottom: 5,
  },
  numTextSubTotal: {
    color: colors.secundary,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
