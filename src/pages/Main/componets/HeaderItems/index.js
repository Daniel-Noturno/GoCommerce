import React from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';

const HeaderItems = ({ categaries, itemID, onPress }) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
  >
    {categaries.map(item =>(
      <TouchableOpacity
        key={item.id}
        style={
          itemID == parseInt(item.id)
          ? styles.itemCategoryActivity
          : styles.itemCategoryNoActivity
        }
        onPress={() => onPress(item.id)}
      >
        <Text style={
          itemID == parseInt(item.id)
          ? styles.itemTextCategoryActivity
          : styles.itemTextCategoryNoActivity
          }
        >
          {item.title.toUpperCase()}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

export default HeaderItems;
