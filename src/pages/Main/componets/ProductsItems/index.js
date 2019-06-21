import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ProductsItems = ({ products, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: products.image }} />
      <View style={styles.info}>
        <Text style={styles.name}>{products.name}</Text>
        <Text style={styles.brand}>{products.brand}</Text>
      </View>
      <Text style={styles.price}>{`R$${products.price}`}</Text>
    </TouchableOpacity>
);

export default ProductsItems;
