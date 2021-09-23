import React from 'react';
import { removeCity, selectCity } from '../../store/city';
import { editSelectedCity } from '../../store/selectedCity';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

export const ListItem: React.FC<{
  id: number, 
  name: string,
  status: boolean
}> = ({id, name, status}) => {
  const dispatch: Dispatch<any> = useDispatch()

  const remove = () => {
    dispatch(removeCity(id))
    if (status) {
      dispatch(editSelectedCity('', null, ''));
    }
  }

  const select = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectCity(id, e.target.checked));
    dispatch(editSelectedCity(e.target.checked ? name : '', null, ''));
  }

  return (
    <div className="ListItem">
      <span>{name}</span>
      <div>
      <input className="Checkbox" checked={status || false} onChange={(e) => select(e)} type="checkbox"></input>
      <span className="Cursor" onClick={remove}>x</span>
      </div>
      
    </div>  
  )
}