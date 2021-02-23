import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import { ENV } from '../constant';

const middlewares: any = [ReduxThunk];

if (process.env.NODE_ENV !== ENV.PRODUCTION) {
  const logger = createLogger();

  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export type AppDispatch = typeof store.dispatch;

export default store;
