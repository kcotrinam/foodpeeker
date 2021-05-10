import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from './actionTypes';

const fetchCategories = () => async (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });

  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const json = await response.json();

    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: json.categories });
  } catch (error) {
    dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error });
  }
};

export default fetchCategories;
