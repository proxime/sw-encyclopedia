import {
  EncyclopediaState,
  EncyclopediaActionTypes,
  GET_ENCYCLOPEDIA_DATA,
  SET_ENCYCLOPEDIA_ERROR,
  SET_ENCYCLOPEDIA_REQUEST,
  SET_ENCYCLOPEDIA_FILTER,
} from '../types/encyclopedia';

const initState: EncyclopediaState = {
  planets: null,
  characters: null,
  species: null,
  starships: null,
  loading: true,
  error: false,
  fetched: false,
  filter: 'characters',
};

export default (
  state: EncyclopediaState = initState,
  action: EncyclopediaActionTypes
): EncyclopediaState => {
  switch (action.type) {
    case GET_ENCYCLOPEDIA_DATA:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: false,
        fetched: true,
      };
    case SET_ENCYCLOPEDIA_REQUEST:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };
    case SET_ENCYCLOPEDIA_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_ENCYCLOPEDIA_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
