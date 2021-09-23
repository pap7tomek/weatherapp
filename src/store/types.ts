export enum CityActionTypes {
  ADD_CITY = '@@city/ADD_CITY',
  REMOVE_CITY = '@@city/REMOVE_CITY',
  SELECT_CITY = '@@city/SELECT_CITY',
  EDIT_CITY = '@@city/EDIT_CITY'
}

export enum SelectedCityTypes {
  EDIT_SELECTED_CITY ='@@selectedCity/EDIT_SELECTED_CITY'
}

export interface City {
  id: number;
  name: string;
  status: boolean
}

export interface SelectedCity {
  name: string;
  weather?: string;
  temperature?: number;
}

export interface CityState {
  readonly data: City[];
}

export interface CityActions {
  data: City[];
  payload: City;
  type: CityActionTypes;
}

export interface SelectedCityActions {
  payload: {
    name: string;
    weather?: string;
    temperature?: number;
  };
  type: SelectedCityTypes;
}

export interface RootState {
  city: CityState;
  selectedCity: SelectedCity;
}

export interface AddCity {
  payload: City;
  type: CityActionTypes.ADD_CITY;
}

export interface RemoveCity {
  payload: {
    id: number;
  };
  type: CityActionTypes.REMOVE_CITY;
}

export interface SelectCity {
  payload: {
    id: number;
    status: boolean;
  };
  type: CityActionTypes.SELECT_CITY;
}

export interface EditSelectedCity {
  payload: {
    name: string;
    weather?: string;
    temperature?: number | null;
  };
  type: SelectedCityTypes.EDIT_SELECTED_CITY
}