import {
  DELETE_USER_ACTION_LOADING,
  DELETE_USER_ACTION_SUCCESS,
  DELETE_USER_ACTION_ERROR,
} from '../actionTypes';

const initialState = {
  loading: false,
  data: [],
};

const deleteUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER_ACTION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_USER_ACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case DELETE_USER_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default deleteUserReducer;
