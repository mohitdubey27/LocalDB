import {
  LOGIN_USER_ACTION_LOADING,
  LOGIN_USER_ACTION_SUCCESS,
  LOGIN_USER_ACTION_ERROR,
  LOGIN_USER_CLEAR_STATE,
} from '../actionTypes';

const initialState = {
  loading: false,
  data: [],
};

const loginUserReducer = (state = initialState, action) => {
  switch (action?.type) {
    case LOGIN_USER_ACTION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_ACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOGIN_USER_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOGIN_USER_CLEAR_STATE:
      return state;
    default:
      return state;
  }
};

export default loginUserReducer;
