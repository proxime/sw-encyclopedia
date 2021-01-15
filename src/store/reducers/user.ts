import { UserState, UserActionTypes, GET_USER, LOGOUT } from '../types/user';

const initState: UserState = {
  user: null,
};

export default (
  state: UserState = initState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return initState;
    default:
      return state;
  }
};
