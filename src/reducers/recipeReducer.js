import {
  FETCH_RECIPE_FAILURE,
  FETCH_RECIPE_REQUEST,
  FETCH_RECIPE_SUCCESS,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  info: [],
  loading: false,
  error: null,
};

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RECIPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.payload,
      };
    case FETCH_RECIPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
