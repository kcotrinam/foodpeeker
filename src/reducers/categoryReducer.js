import { SET_BOOKS } from '../actions/actionTypes';

const INITIAL_STATE = [];

const categoryReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case SET_BOOKS:
      return state;
    default:
      return state;
  }
};

export default categoryReducer;
