import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';

import rootSaga from './sagas';
import {combinedReducers} from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(combinedReducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export {store};
