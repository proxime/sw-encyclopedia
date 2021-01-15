import { combineReducers } from 'redux';
import userReducer from './user';
import encyclopediaReducer from './encyclopedia';

export const rootReducer = combineReducers({
  user: userReducer,
  encyclopedia: encyclopediaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
