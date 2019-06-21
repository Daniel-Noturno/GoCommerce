import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';
import { colors } from '~/styles';

import Icon from 'react-native-vector-icons/FontAwesome';

class ProductsCart extends React.Component {
  constructor() {
    super()
    this.handlerChangeFunc = this.handlerChangeFunc.bind(this)
  }

  handlerChangeFunc(newText) {
    if (newText != undefined) {
      const { update, data } = this.props;
      update(newText, data.id);
    }
  }

  render() {
    const { data, onPress } = this.props;
    const value = data.count;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: data.image }} />
        <View style={styles.containerInfo}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.brand}>{data.brand}</Text>
          <Text style={styles.price}>{`R$${data.price}`}</Text>
        </View>
        <View style={styles.number}>
          <TextInput
            defaultValue={value}
            onChangeText={this.handlerChangeFunc}
            underlineColorAndroid='transparent'
            keyboardType={'number-pad'}
          />
        </View>
        <TouchableOpacity style={styles.icon} onPress={onPress}>
          <Icon name="times" size={16} color={colors.regular} />
        </TouchableOpacity>
      </View>
    )
  }
};

export default ProductsCart;
