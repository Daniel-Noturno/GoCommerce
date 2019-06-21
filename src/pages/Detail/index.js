import React from 'react';
import { View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';

import { Creators as DetailsActions } from '~/store/ducks/details';
import { Creators as CartActions} from '~/store/ducks/cart';

import styles from './styles';

class Detail extends React.Component {
  componentDidMount() {
    const idProduct = this.props.navigation.getParam('idProduct');
    this.props.getDetailsRequest(idProduct);
  }

  render() {
    const { data, loading } = this.props;
    return(
      <View style={styles.container}>
        {
          !loading ?
          (
            <View style={styles.containerProduct}>
              <Image style={styles.image} source={{ uri: data.image }} />
              <View style={styles.containerInfo}>
                <View style={styles.info}>
                  <Text style={styles.name}>{data.name}</Text>
                  <Text style={styles.brand}>{data.brand}</Text>
                </View>
                <Text style={styles.price}>{`R$${data.price}`}</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => this.props.ADD_TO_CART({...data, count: "1"})}>
                <Text style={styles.textButton}>Adicionar ao Carrinho</Text>
              </TouchableOpacity>
            </View>
          ) :
          <ActivityIndicator style={styles.loading} size="large" />
        }

      </View>
    )
  }
}

const mapStateToProps = state => ({
  data: state.details.data,
  loading: state.details.loading,
});

const mapDispachToProps = {
  ...DetailsActions,
  ...CartActions,
};

export default connect(mapStateToProps, mapDispachToProps)(Detail);
