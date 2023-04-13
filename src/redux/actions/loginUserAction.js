import {
  LOGIN_USER_ACTION_LOADING,
  LOGIN_USER_ACTION_SUCCESS,
  LOGIN_USER_ACTION_ERROR,
  LOGIN_USER_CLEAR_STATE,
} from '../actionTypes';
import {createTable, getUser} from '../../services/login-signup-service';
import Toast from 'react-native-simple-toast';

const loginUserAction = data => async dispatch => {
  dispatch({type: LOGIN_USER_ACTION_LOADING});
  try {
    await createTable();
    const user = await getUser(data);
    if (user?.length === 1) {
      dispatch({type: LOGIN_USER_ACTION_SUCCESS, payload: user});
    } else {
      Toast.show('User not found', Toast.LONG);
      dispatch({
        type: LOGIN_USER_ACTION_ERROR,
        payload: {message: 'User not found'},
      });
    }
  } catch (error) {
    console.log('user error=======>', error);
  }
};

const clearLoginState = data => async dispatch => {
  dispatch({type: LOGIN_USER_CLEAR_STATE});
};

export {loginUserAction, clearLoginState};
