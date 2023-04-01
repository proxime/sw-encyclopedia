import { combineReducers } from 'redux';
import encyclopediaReducer from './encyclopedia';

export const rootReducer = combineReducers({
  encyclopedia: encyclopediaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
