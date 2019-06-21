import api from '~/services/api';

import { call, put } from 'redux-saga/effects';

import { Creators as DetailsAction } from '~/store/ducks/details';

export function* getDetails(action) {
  try {
    const response = yield call(api.get, `/products/${action.payload.idProduct}`);

    yield put(DetailsAction.getDetailsSuccess(response.data));
  } catch (err) {
    yield put(DetailsAction.getDetailsFailure('Erro'));
  }
};
