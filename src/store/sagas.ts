import { all, put, takeLatest } from "redux-saga/effects";
import { editSelectedCity } from "./selectedCity"
import axios from "axios";

export function* load(action: {payload: {name: string}, type: string}) {
  try {
    const { data } = yield axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload.name}&units=metric&APPID=d94df1ef060b7fe3d3983bf5ee471190`);
    yield put(editSelectedCity(action.payload.name, data.main.temp, data.weather[0].main))
    

  } catch (error) {
      console.error('error here!')
  }
}

export function* rootSaga(): Generator {
    return yield all([
        takeLatest("FETCH_WEATHER", load),
    ]);
  }