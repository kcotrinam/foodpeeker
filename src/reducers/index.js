import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import countryReducer from './CountryReducer';
import mealListReducer from './mealListReducer';
import recipeReducer from './recipeReducer';

const allReducers = combineReducers({
  categories: categoryReducer,
  countries: countryReducer,
  mealList: mealListReducer,
  recipe: recipeReducer,
});

export default allReducers;
