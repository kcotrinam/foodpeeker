import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import countryReducer from './CountryReducer';
import mealListReducer from './mealListReducer';
import recipeReducer from './recipeReducer';
import filterReducer from './filterReducer';

const allReducers = combineReducers({
  categories: categoryReducer,
  countries: countryReducer,
  mealList: mealListReducer,
  recipe: recipeReducer,
  wordFilter: filterReducer,
});

export default allReducers;
