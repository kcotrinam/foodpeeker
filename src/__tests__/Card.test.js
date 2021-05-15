import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Card from '../components/Card';

describe('<Card>', () => {
  let component;
  beforeEach(() => {
    component = render(<Card name="Test" />);
  });

  test('render', () => {
    component.getByText('Test');
  });
});
