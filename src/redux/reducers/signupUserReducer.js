import {
  CREATE_USER_ACTION_LOADING,
  CREATE_USER_ACTION_SUCCESS,
  CREATE_USER_ACTION_ERROR,
  CREATE_USER_CLEAR_STATE,
} from '../actionTypes';

const initialState = {
  loading: false,
  data: [],
};

const createUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_ACTION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CREATE_USER_ACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action?.payload,
      };
    case CREATE_USER_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        data: action?.payload,
      };
    case CREATE_USER_CLEAR_STATE:
      return state;
    default:
      return state;
  }
};

export default createUserReducer;
