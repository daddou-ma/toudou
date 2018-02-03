import { createStore, applyMiddleware } from 'redux';
import {routerMiddleware as createRouterMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import {createBrowserHistory} from 'history';

import reducer from './reducers/index';
import saga from './sagas/index';

const history = createBrowserHistory();


const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

const store = createStore(reducer, applyMiddleware(routerMiddleware, sagaMiddleware));
sagaMiddleware.run(saga);

export {history, store};