import React, { useState } from 'react';
import { addCity } from '../../store/city';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

export const Form: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
 
  const [value, setValue] = useState("");
  const save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      return
    }
    dispatch(addCity(value, value, 1));
    setValue("")
  }

  return (
    <form onSubmit={(e) => save(e)}>
      <label>
        <input className="Input" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
      <input className="Button" type="submit" value="Dodaj" />
    </form>
  )
}