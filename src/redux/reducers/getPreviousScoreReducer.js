import {
  GET_PREVIOUS_SCORE_LOADING,
  GET_PREVIOUS_SCORE_SUCCESS,
  GET_PREVIOUS_SCORE_ERROR,
} from '../actionTypes';

const getPreviousScoreReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PREVIOUS_SCORE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PREVIOUS_SCORE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_PREVIOUS_SCORE_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
      };
    default:
      return state;
  }
};

export default getPreviousScoreReducer;
