
import { SelectedCityTypes, SelectedCityActions } from '../types'

export const initialState: string = '';

export const selectedCity = (state = initialState, action: SelectedCityActions) => {
    switch (action.type) {
        case SelectedCityTypes.EDIT_SELECTED_CITY:
            return {
                name: action.payload.name,
                temperature: action.payload.temperature,
                weather: action.payload.weather
            };
        default:
            return state;
    }
};