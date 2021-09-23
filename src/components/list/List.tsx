import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import { ListItem } from '../listItem/ListItem';

export const List: React.FC = () => {
  const cities = useSelector((state: RootState) => state.city).data;

  return (
    <div>
      {cities.map(city => (
        <ListItem key={city.id} id={city.id} status={city.status} name={city.name}/>
      ))}
    </div>
   
  )
}