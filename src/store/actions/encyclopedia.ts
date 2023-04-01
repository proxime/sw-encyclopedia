import {
  GET_ENCYCLOPEDIA_DATA,
  SET_ENCYCLOPEDIA_ERROR,
  SET_ENCYCLOPEDIA_REQUEST,
  SET_ENCYCLOPEDIA_FILTER,
  Result,
  Filter,
  EncyclopediaActionTypes,
} from '../types/encyclopedia';
import { ThunkInterface } from '../types/index';

interface Response {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result;
}

const fetchData = async (url: string): Promise<Result> => {
  try {
    let page = 1;
    let data: Response;
    const result: Result = [];

    do {
      const res = await fetch(`${url}?page=${page}`, {
        method: 'GET',
      });
      data = await res.json();
      result.push(...data.results);
      page += 1;
    } while (data.next);

    return result;
  } catch (err) {
    console.error({ err });
    throw new Error('Error occured while fetching data.');
  }
};

export const getEncyclopediaDataAction = (): ThunkInterface => {
  return async (dispatch): Promise<void> => {
    dispatch({
      type: SET_ENCYCLOPEDIA_REQUEST,
      payload: true,
    });
    try {
      const characters = await fetchData('https://swapi.dev/api/people');
      const planets = await fetchData('https://swapi.dev/api/planets');
      const species = await fetchData('https://swapi.dev/api/species');
      const starships = await fetchData('https://swapi.dev/api/starships');

      dispatch({
        type: GET_ENCYCLOPEDIA_DATA,
        payload: {
          planets,
          characters,
          species,
          starships,
        },
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: SET_ENCYCLOPEDIA_ERROR,
        payload: true,
      });
    }
  };
};

export const setEncyclopediaFilter = (
  filter: Filter
): EncyclopediaActionTypes => {
  return {
    type: SET_ENCYCLOPEDIA_FILTER,
    payload: filter,
  };
};
