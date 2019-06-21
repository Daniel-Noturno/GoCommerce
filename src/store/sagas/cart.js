import { put, select } from 'redux-saga/effects';

import { Creators as CartAction } from '~/store/ducks/cart';

export function* ADD(action) {
  try {
    const state = yield select(state => state.cart.data);

    const find = state.find((item) => item.id === action.payload.data.id);

    if (find === undefined) {
      const data = [...state, action.payload.data];

      yield put(CartAction.SUCCESS(data));
    } else {
      yield put(CartAction.FAILURE('Item Já existe'));
    }
  } catch (err) {
    yield put(CartAction.FAILURE('Error'));
  }
};

export function* REMOVE(action) {
  try {
    const state = yield select(state => state.cart.data);

    const data = state.filter((item) => item.id != action.payload.id);

    yield put(CartAction.SUCCESS(data));
  } catch (err) {
    yield put(CartAction.FAILURE('Error'));
  }
};

export function* UPDATE(action) {
  try {
    const state = yield select(state => state.cart.data);

    const data = state.map(function(item) {
      if (item.id === action.payload.id) {
        return {...item, count: action.payload.value}
      } else {
        return item
      }
    });

    yield put(CartAction.SUCCESS(data));
  } catch (err) {
    yield put(CartAction.FAILURE('Error'));
  }
};
