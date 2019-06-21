import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
  productsList: {
    margin: metrics.basePadding,
  },
  columnWrapper: {
    marginHorizontal: metrics.baseMargin,
    padding: metrics.baseMargin,
    justifyContent: 'space-between',
  },
  containerHeader: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
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
  loading: {
    marginTop: 20,
  }
});

export default styles;
