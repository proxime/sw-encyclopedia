import { UserActionTypes, GET_USER, LOGOUT } from '../types/user';
import { getUser, login } from '../../helpers/authService';
import { ThunkInterface } from '../types/index';

export const logoutAction = (): UserActionTypes => {
  localStorage.removeItem('sw-auth-token');
  return {
    type: LOGOUT,
  };
};

export const getUserAction = (): ThunkInterface => {
  return async (dispatch): Promise<void> => {
    const token = localStorage.getItem('sw-auth-token');
    if (!token) {
      return;
    }

    try {
      const user = await getUser(token);

      dispatch({
        type: GET_USER,
        payload: user,
      });
    } catch (err) {
      dispatch(logoutAction());
    }
  };
};

export const loginAction = (): ThunkInterface => {
  return async (dispatch): Promise<void> => {
    try {
      const authToken = await login();

      localStorage.setItem('sw-auth-token', authToken);

      dispatch(getUserAction());
    } catch (err) {
      console.error(err);
    }
  };
};
