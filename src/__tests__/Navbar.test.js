import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('<Navbar />', () => {
  let component;

  beforeEach(() => {
    component = render(<MemoryRouter><Navbar /></MemoryRouter>);
  });

  test('It should render', () => {
    component.getByText('FOODPEEKER');
  });

  test('There should be a Home button', () => {
    component.getByText('Home');
  });

  test('There should be a Categories button', () => {
    component.getByText('Categories');
  });

  test('There should be a Countries button', () => {
    component.getByText('Countries');
  });
});
