import {
  UPDATE_USER_ACTION_LOADING,
  UPDATE_USER_ACTION_SUCCESS,
  UPDATE_USER_ACTION_ERROR,
} from '../actionTypes';

const initialState = {
  loading: false,
  data: [],
};

const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_ACTION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_ACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case UPDATE_USER_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default updateUserReducer;
