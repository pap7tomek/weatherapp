import { AddCity, RemoveCity, SelectCity, CityActionTypes } from "../types";

export const addCity = (
  name: string,
  weather: string,
  temperature: number
): AddCity => ({
  payload: {
    id: Math.random(),
    name,
    status: false,
  },
  type: CityActionTypes.ADD_CITY,
});

export const removeCity = (id: number): RemoveCity => ({
  payload: {
    id,
  },
  type: CityActionTypes.REMOVE_CITY,
});

export const selectCity = (id: number, status: boolean): SelectCity => ({
  payload: {
    id,
    status
  },
  type: CityActionTypes.SELECT_CITY, 
});
