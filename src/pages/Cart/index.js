import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '~/store/ducks/cart';

import styles from './styles';

import ProducstCart from './componets/ProductsCart';

class Cart extends React.Component {
  totalCash = (data) => {
    let mult = []
    mult = data.map(function(item){
      let value = parseFloat(item.price) * parseFloat(item.count);
      return parseFloat(value.toFixed(2));
    });

    return parseFloat(mult.reduce((total, next) => total + next, 0));
  }

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProducstCart
              update={(x, y) => this.props.UPDATE_TO_CART(x, y)}
              onPress={() => this.props.REMOVE_TO_CART(item.id)}
              data={item} />
            )
          }
        />
        <View style={styles.totalPriceContainer}>
          <Text style={styles.textSubTotal}>Subtotal</Text>
          <Text style={styles.numTextSubTotal}>{`R$${this.totalCash(data)}`}</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  data: state.cart.data,
});

const mapDispachToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(Cart);
