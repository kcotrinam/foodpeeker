import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import RecipeCard from '../components/RecipeCard';

describe('<RecipeCard/>', () => {
  let component;

  beforeEach(() => {
    component = render(
      <RecipeCard
        title="Test title"
        description="test description"
        category="French"
        area="Asian"
      />,
    );
  });

  test('Component should render with the name', () => {
    component.getByText('Test title');
  });

  test('Component should render with the description', () => {
    component.getByText('test description');
  });

  test('Component should render the category', () => {
    component.getByText('French');
  });

  test('Component should render the area', () => {
    component.getByText('Asian');
  });

  test('Component should render the area', () => {
    component.getByText('Asian');
  });
});
