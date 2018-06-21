import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

export const history = createHistory();

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const reduxRouterMiddleware = routerMiddleware(history);

  const middleware = [
    sagaMiddleware,
    reduxRouterMiddleware
  ];

  if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middleware.push(logger);
  }

  const newStore = createStore( rootReducer
,
    composeEnhancers(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);

  return newStore;
};

export const store = configureStore();
