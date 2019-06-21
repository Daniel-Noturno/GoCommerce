import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { colors } from './styles';

import Main from './pages/Main';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

const ProductPages = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'GoCommerce',
      headerBackTitle: null,
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Detalhes do Produto',
    },
  },
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.white,
      borderBottomWidth: 0,
      height: 54,
    },
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    headerTintColor: colors.primary,
  },
});

const CartClient = createStackNavigator({
  Cart: {
    screen: Cart,
    navigationOptions: {
      title: 'Carrinho',
      headerStyle: {
        backgroundColor: colors.white,
        borderBottomWidth: 0,
        height: 54,
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      headerTintColor: colors.primary,
    },
  },
});

const Routes = createAppContainer(createBottomTabNavigator({
  ProductPages: {
    screen: ProductPages,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
    },
  },
  CartClient: {
    screen: CartClient,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={20} color={tintColor} />,
    },
  },
},
{
  tabBarOptions: {
    showIcon: true,
    showLabel:  false,
    activeTintColor: colors.primary,
    inactiveTintColor: colors.regular,
    style: {
      height: 40,
      borderColor: colors.backgroundGray,
    },
  },
},
));

export default Routes;
