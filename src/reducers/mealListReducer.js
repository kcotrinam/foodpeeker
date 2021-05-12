import {
  FETCH_MEALLIST_FAILURE,
  FETCH_MEALLIST_REQUEST,
  FETCH_MEALLIST_SUCCESS,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
  meals: [],
  error: null,
};

const mealListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MEALLIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MEALLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        meals: action.payload,
      };
    case FETCH_MEALLIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default mealListReducer;
