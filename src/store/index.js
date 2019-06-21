import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sagas from './sagas';
import reducers from './ducks';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer  = persistReducer(persistConfig, reducers);

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [
  sagaMiddleware,
];

const store = createStore(persistedReducer, compose(
  applyMiddleware(...middleware),
  console.tron.createEnhancer(),
));

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
