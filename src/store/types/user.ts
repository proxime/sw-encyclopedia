export const GET_USER = 'GET_USER';
export const LOGOUT = 'LOGOUT';

export interface User {
  id: number;
  username: string;
  country: string;
}

export interface UserState {
  user: null | User;
}

interface GetUserAction {
  type: typeof GET_USER;
  payload: User;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type UserActionTypes = GetUserAction | LogoutAction;
