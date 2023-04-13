import {
  SAVE_SCORE_ACTION_LOADING,
  SAVE_SCORE_ACTION_SUCCESS,
  SAVE_SCORE_ACTION_ERROR,
} from '../actionTypes';

const saveScoreReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_SCORE_ACTION_LOADING:
      return {
        saveScoreLoading: true,
      };
    case SAVE_SCORE_ACTION_SUCCESS:
      return {
        saveScoreLoading: false,
        data: action.payload,
      };
    case SAVE_SCORE_ACTION_ERROR:
      return {
        saveScoreLoading: false,
        data: [],
      };
    default:
      return state;
  }
};

export default saveScoreReducer;
