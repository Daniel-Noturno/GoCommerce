import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as HeaderActions } from '~/store/ducks/header';

import ProductsItems from './componets/ProductsItems';
import HeaderItems from './componets/HeaderItems'

import styles from './styles';

class Main extends React.Component {
  componentDidMount() {
    this.props.getHeaderRequest();
    this.props.getProductsRequest(1);
  }

  productsRequest = (itemID) => {
    parseInt(itemID);
    this.props.getProductsRequest(itemID);
  }

  render() {
    const { navigation, categaries, itemID, categories_products, loading } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <HeaderItems categaries={categaries} itemID={itemID} onPress={this.props.getProductsRequest}/>
        </View>
        {
          !loading ?
          <FlatList
            data={categories_products.products}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <ProductsItems
              onPress={() =>
                navigation.navigate('Detail', { idProduct: item.id })
              }
              products={item} />
            }
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
          /> :
          <ActivityIndicator style={styles.loading} size="large"/>
        }

      </View>
    )
  }
}

const mapStateToProps = state => ({
  categaries: state.header.data,
  itemID: state.header.itemID,
  categories_products: state.header.products,
  loading: state.header.loading,
});

const mapDispachToProps = dispatch => bindActionCreators(HeaderActions, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(Main);
