import { EditSelectedCity, SelectedCityTypes } from "../types";

export const editSelectedCity = (
  name: string,
  temperature: number | null,
  weather: string
): EditSelectedCity => ({
  payload: {
    name,
    temperature,
    weather
  },
  type: SelectedCityTypes.EDIT_SELECTED_CITY,
});