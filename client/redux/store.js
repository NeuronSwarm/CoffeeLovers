import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/coffee-api';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;