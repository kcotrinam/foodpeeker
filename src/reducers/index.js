import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import countryReducer from './CountryReducer';

const allReducers = combineReducers({
  categories: categoryReducer,
  countries: countryReducer,
});

export default allReducers;
