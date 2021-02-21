import { combineReducers } from '@reduxjs/toolkit';
import todo from './todo';

const rootReducer = combineReducers({
  todo,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
