import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import {AsyncStorage} from 'react-native';
import rootSaga from './sagas';
import {combinedReducers} from './reducers';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  timeout: null,
  whitelist: ['fetchTripReviewReducer']
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => console.log(store.getState()));

export const persistor = persistStore(store);
