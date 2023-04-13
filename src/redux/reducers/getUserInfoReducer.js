import {
  GET_USER_INFO_ACTION_LOADING,
  GET_USER_INFO_ACTION_SUCCESS,
  GET_USER_INFO_ACTION_ERROR,
} from '../actionTypes';

const initialState = {
  loading: false,
  data: [],
};

const getUserInfoReducer = (state = initialState, action) => {
  switch (action?.type) {
    case GET_USER_INFO_ACTION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_INFO_ACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_USER_INFO_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default getUserInfoReducer;
