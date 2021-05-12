import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import countryReducer from './CountryReducer';
import mealListReducer from './mealListReducer';

const allReducers = combineReducers({
  categories: categoryReducer,
  countries: countryReducer,
  mealList: mealListReducer,
});

export default allReducers;
