import {
  GET_QUIZ_LOADING,
  GET_QUIZ_SUCCESS,
  GET_QUIZ_ERROR,
  CLEAR_QUIZ_STATE,
} from '../actionTypes';

const GetQuizReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_QUIZ_LOADING:
      return {
        quizLoadingStatus: 'loading',
      };
    case GET_QUIZ_SUCCESS:
      return {
        quizLoadingStatus: 'loaded',
        quizData: action.payload,
      };
    case GET_QUIZ_ERROR:
      return {
        quizLoadingStatus: 'error',
        quizData: null,
      };
    case CLEAR_QUIZ_STATE:
      return {
        quizLoadingStatus: 'notLoaded',
        quizData: null,
      };
    default:
      return state;
  }
};

export default GetQuizReducer;
