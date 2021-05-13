import splitInfo from '../utils/splitInfo';
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
  FETCH_RECIPE_FAILURE,
  FETCH_RECIPE_REQUEST,
  FETCH_RECIPE_SUCCESS,
} from './actionTypes';

export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });

  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const json = await response.json();

    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: json.categories });
  } catch (error) {
    dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error });
  }
};

export const fetchCountries = () => async (dispatch) => {
  dispatch({ type: FETCH_COUNTRIES_REQUEST });

  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const json = await response.json();

    dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: json.meals });
  } catch (error) {
    dispatch({ type: FETCH_COUNTRIES_FAILURE, payload: error });
  }
};

export const fetchMealList = (path) => async (dispatch) => {
  dispatch({ type: FETCH_MEALLIST_REQUEST });

  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${path}`);
    const json = await response.json();

    dispatch({ type: FETCH_MEALLIST_SUCCESS, payload: json.meals });
  } catch (error) {
    dispatch({ type: FETCH_MEALLIST_FAILURE, payload: error });
  }
};

// Recipe request action

export const fetchRecipe = (id) => async (dispatch) => {
  dispatch({ type: FETCH_RECIPE_REQUEST });

  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const json = await response.json();

    const { details, ingredients, measurements } = splitInfo(json.meals);

    dispatch({ type: FETCH_RECIPE_SUCCESS, payload: { details, ingredients, measurements } });
  } catch (error) {
    dispatch({ type: FETCH_RECIPE_FAILURE, payload: error });
  }
};
