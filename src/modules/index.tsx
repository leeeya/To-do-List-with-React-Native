import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const middlewares: any = [ReduxThunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();

  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export type AppDispatch = typeof store.dispatch;

export default store;
