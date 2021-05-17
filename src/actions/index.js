import splitInfo from '../utils/splitInfo';

import * as action from './actions';

export const fetchCategories = () => async (dispatch) => {
  dispatch(action.categoryRequest());

  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php',
    );
    const json = await response.json();

    dispatch(action.categorySuccess(json.categories));
  } catch (error) {
    dispatch(action.categoryFailure(error));
  }
};

export const fetchCountries = () => async (dispatch) => {
  dispatch(action.countryRequest());

  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
    );
    const json = await response.json();

    dispatch(action.countrySuccess(json.meals));
  } catch (error) {
    dispatch(action.countryFailure(error));
  }
};

export const fetchMealList = (path) => async (dispatch) => {
  dispatch(action.mealListRequest());

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?${path}`,
    );
    const json = await response.json();

    dispatch(action.mealListSuccess(json.meals));
  } catch (error) {
    dispatch(action.mealListFailure(error));
  }
};

// Recipe request action

export const fetchRecipe = (id) => async (dispatch) => {
  dispatch(action.recipeRequest());

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const json = await response.json();

    const { details, ingredients, measurements } = splitInfo(json.meals);

    dispatch(action.recipeSuccess(details, ingredients, measurements));
  } catch (error) {
    dispatch(action.recipeFailure(error));
  }
};

export const filterAction = (word) => action.filterByName(word);
