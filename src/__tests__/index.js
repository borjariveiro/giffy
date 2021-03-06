// import { render, screen, fireEvent } from '@testing-library/react'
// import App from '../App'

// test('search form could be used', async () => {
//   render(<App />)
//   const input = await screen.findByRole('textbox')
//   fireEvent.change(input, { target: { value: 'Matrix' } })

//   const button = await screen.findByRole('button')
//   fireEvent.click(button)

//   const title = await screen.findAllByText('Matrix')
//   expect(title).toBeVisible()
// });

import React from 'react';
import { render } from '@testing-library/react';
import App from '../App'

test('renders without crashing', async () => {
  const { findByText } = render(<App />)
  const title = await findByText(/Última búsqueda/i)
  expect(title).toBeInTheDocument()
});
