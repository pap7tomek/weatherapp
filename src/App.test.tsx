import React from 'react';
import App from './App';

import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import { Form } from './components/form/Form'


// test('loads and displays greeting', async () => {
//   render(<App/>)

//   // fireEvent.click(screen.getByText('Load Greeting'))

//   // await waitFor(() => screen.getByRole('heading'))

//   expect(screen.getByRole('heading')).toHaveTextContent('hello there')
//   expect(screen.getByRole('button')).toBeDisabled()
// })
test('button exists and has good name', () => {
  render(<App />);
  const element = screen.getByText(/Dodaj/i);
  expect(element).toBeInTheDocument();
});

test('has input', () => {
  render(<App />);
  const element = screen.getByRole('textbox');
  expect(element).toBeInTheDocument();
})