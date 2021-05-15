import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Navbar from '../containers/Navbar';

describe('<Navbar />', () => {
  let component;

  beforeEach(() => {
    component = render(<Navbar />);
  });

  test('It should render', () => {
    component.getByText('FOODKEEPER');
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
