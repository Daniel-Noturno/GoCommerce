import { all, takeLatest } from 'redux-saga/effects';

import { Types as HeaderActions } from '~/store/ducks/header';
import { Types as DetailsActions } from '~/store/ducks/details';
import { Types as CartsActions } from '~/store/ducks/cart';

import { getHeader, getProducts } from './header';
import { getDetails } from './details';
import { ADD, REMOVE, UPDATE } from './cart';

export default function* rootSaga() {
  return yield all([
    takeLatest(HeaderActions.GET_REQUEST, getHeader),
    takeLatest(HeaderActions.GET_PRODUCTS_REQUEST, getProducts),
    takeLatest(DetailsActions.GET_REQUEST, getDetails),
    takeLatest(CartsActions.ADD_TO_CART, ADD),
    takeLatest(CartsActions.REMOVE_TO_CART, REMOVE),
    takeLatest(CartsActions.UPDATE_TO_CART, UPDATE),
  ]);
}
