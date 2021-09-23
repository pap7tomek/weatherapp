import { CityActions, CityActionTypes, CityState } from "../types";

export const initialState: CityState = {
  data: [
    {
      id: 1,
      name: "Warszawa",
      status: false,
    },
    {
        id: 2,
        name: "Poznań",
        status: false,  
    },
  ],
};

export const city = (state = initialState, action: CityActions) => {
  switch (action.type) {
    case CityActionTypes.ADD_CITY:
      return {
        data: [
          ...state.data,
          {
            id: action.payload.id,
            name: action.payload.name,
            status: false
          },
        ],
      };

    case CityActionTypes.REMOVE_CITY:
      return {
        data: state.data.filter((city) => city.id !== action.payload.id),
      };
    case CityActionTypes.SELECT_CITY:
      return {
        data: state.data.map((city) => ({
          ...city,
          status: city.id === action.payload.id && action.payload.status,
        })),
      };
    default:
      return state;
  }
};
