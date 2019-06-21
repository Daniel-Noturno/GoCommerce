import api from '~/services/api';

import { call, put } from 'redux-saga/effects';

import { Creators as HeaderActions } from '~/store/ducks/header';

export function* getHeader() {
  try {
    const response = yield call(api.get, '/categories');

    yield put(HeaderActions.getHeaderSuccess(response.data));
  } catch (err) {
    yield put(HeaderActions.getHeaderFailure('Erro'));
  }
}

export function* getProducts(action) {
  try {
    const response = yield call(api.get, `/category_products/${action.payload.itemID}`);

    yield put(HeaderActions.getProductsSuccess(response.data, action.payload.itemID));
  } catch (err) {
    yield put(HeaderActions.getProductsFailure('Erro'));
  }
}
