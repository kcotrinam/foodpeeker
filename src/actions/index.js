import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
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
