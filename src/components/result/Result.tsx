import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../store/types';

export const Result: React.FC = () => {
  const selectedCity = useSelector((state: RootState) => state.selectedCity);
  const ref: {current: ReturnType<typeof setInterval> | null} = useRef(null);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if(selectedCity.name) {
      if (ref.current !== null ) {
        clearInterval(ref.current)
      }
      dispatch({type: 'FETCH_WEATHER', payload: { name: selectedCity.name}})
      let interval = setInterval(() => {
        dispatch({type: 'FETCH_WEATHER', payload: { name: selectedCity.name}})
      }, 10000)
      ref.current = interval;
    } else {
      if (ref.current !== null) {
        clearInterval(ref.current)
        ref.current = null;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity.name])

  return (
    <div>
      <p>{selectedCity.name}</p>
      <p>{selectedCity.temperature? `Temperatura: ${selectedCity.temperature}`: ''}</p>
      <p>{selectedCity.weather? `Pogoda: ${selectedCity.weather}`: ''}</p>
    </div>
   
  )
}