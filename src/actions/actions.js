import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_MEALLIST_FAILURE,
  FETCH_MEALLIST_REQUEST,
  FETCH_MEALLIST_SUCCESS,
  FETCH_RECIPE_REQUEST,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE,
  FILTER_BY_NAME,
} from './actionTypes';

export const categoryRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});
export const categorySuccess = (data) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: data,
});

export const categoryFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const countryRequest = () => ({
  type: FETCH_COUNTRIES_REQUEST,
});
export const countrySuccess = (data) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: data,
});

export const countryFailure = (error) => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: error,
});

export const mealListRequest = () => ({
  type: FETCH_MEALLIST_REQUEST,
});
export const mealListSuccess = (data) => ({
  type: FETCH_MEALLIST_SUCCESS,
  payload: data,
});

export const mealListFailure = (error) => ({
  type: FETCH_MEALLIST_FAILURE,
  payload: error,
});

export const recipeRequest = () => ({
  type: FETCH_RECIPE_REQUEST,
});
export const recipeSuccess = (details, ingredients, measurements) => ({
  type: FETCH_RECIPE_SUCCESS,
  payload: { details, ingredients, measurements },
});

export const recipeFailure = (error) => ({
  type: FETCH_RECIPE_FAILURE,
  payload: error,
});

export const filterByName = (word) => ({
  type: FILTER_BY_NAME,
  payload: word,
});
