import {getUser} from '../../services/login-signup-service';
import {
  GET_USER_INFO_ACTION_LOADING,
  GET_USER_INFO_ACTION_SUCCESS,
  GET_USER_INFO_ACTION_ERROR,
} from '../actionTypes';

const getUserInfoAction = data => async dispatch => {
  dispatch({type: GET_USER_INFO_ACTION_LOADING});
  try {
    const user = await getUser(data);
    if (user?.length === 1) {
      dispatch({type: GET_USER_INFO_ACTION_SUCCESS, payload: user});
    } else {
      dispatch({
        type: GET_USER_INFO_ACTION_ERROR,
        payload: {message: 'User not found'},
      });
    }
  } catch (error) {
    console.log('Error while getting user info', error);
  }
};

export default getUserInfoAction;
