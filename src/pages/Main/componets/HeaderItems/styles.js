import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  itemCategoryActivity: {
    borderBottomWidth: 5,
    borderColor: colors.white,
    height: 44,
    marginHorizontal: metrics.baseMargin,
    paddingVertical: metrics.baseMargin,
  },
  itemCategoryNoActivity: {
    height: 44,
    marginHorizontal: metrics.baseMargin,
    paddingVertical: metrics.baseMargin,
  },
  itemTextCategoryActivity: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemTextCategoryNoActivity: {
    color: colors.whiteTransparent,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
