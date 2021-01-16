import { LogoutAction } from './user';

export const GET_ENCYCLOPEDIA_DATA = 'GET_ENCYCLOPEDIA_DATA';
export const SET_ENCYCLOPEDIA_REQUEST = 'SET_ENCYCLOPEDIA_REQUEST';
export const SET_ENCYCLOPEDIA_ERROR = 'SET_ENCYCLOPEDIA_ERROR';
export const SET_ENCYCLOPEDIA_FILTER = 'SET_ENCYCLOPEDIA_FILTER';

export type Result = (Character | Planet | Species | Starship)[];
export type Filter = 'characters' | 'planets' | 'species' | 'starships';
export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  surface_water: string;
  population: string;
  films: string[];
}

export interface Character {
  name: string;
  height: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  films: string[];
}

export interface Species {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  language: string;
}

export interface Starship {
  name: string;
  model: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
}

export interface EncyclopediaData {
  planets: Planet[];
  characters: Character[];
  species: Species[];
  starships: Starship[];
}

export interface EncyclopediaState {
  planets: null | Planet[];
  characters: null | Character[];
  species: null | Species[];
  starships: null | Starship[];
  loading: boolean;
  error: boolean;
  fetched: boolean;
  filter: Filter;
}

interface GetEncyclopediaDataAction {
  type: typeof GET_ENCYCLOPEDIA_DATA;
  payload: EncyclopediaData;
}

interface SetEndyclopediaRequest {
  type: typeof SET_ENCYCLOPEDIA_REQUEST;
  payload: boolean;
}

interface SetEndyclopediaError {
  type: typeof SET_ENCYCLOPEDIA_ERROR;
  payload: boolean;
}

interface SetEndyclopediaFilter {
  type: typeof SET_ENCYCLOPEDIA_FILTER;
  payload: Filter;
}

export type EncyclopediaActionTypes =
  | GetEncyclopediaDataAction
  | LogoutAction
  | SetEndyclopediaRequest
  | SetEndyclopediaError
  | SetEndyclopediaFilter;
