import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import { rootSaga } from './sagas';
import { initialState as cityInitialState, city }  from './city';
import { initialState as selectedCityInitialState, selectedCity} from './selectedCity';

export const initialState = {
      city: cityInitialState,
      citySelected: selectedCityInitialState
    },
    sagaMiddleware = reduxSaga(),
    rootReducer = combineReducers({
        city,
        selectedCity

    }),
    store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;