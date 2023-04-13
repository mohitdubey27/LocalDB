import {
  addUser,
  createTable,
  getUser,
} from '../../services/login-signup-service';
import {
  CREATE_USER_ACTION_LOADING,
  CREATE_USER_ACTION_SUCCESS,
  CREATE_USER_ACTION_ERROR,
  CREATE_USER_CLEAR_STATE,
} from '../actionTypes';
import Toast from 'react-native-simple-toast';

const createUserAction = data => async dispatch => {
  dispatch({type: CREATE_USER_ACTION_LOADING});
  try {
    await createTable();
    const checkUser = await getUser(data?.username);
    if (checkUser?.length === 0) {
      const createUserResult = await addUser(data);
      if (createUserResult) {
        dispatch({
          type: CREATE_USER_ACTION_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({type: CREATE_USER_ACTION_ERROR, payload: {success: false}});
      }
    } else {
      Toast.show('Username already exist!', Toast.LONG);
      dispatch({
        type: CREATE_USER_ACTION_ERROR,
        payload: {message: 'Username already exist!'},
      });
    }
  } catch (error) {
    console.log('Create user error=======>', error);
  }
};

const clearSignUpState = data => async dispatch => {
  dispatch({type: CREATE_USER_CLEAR_STATE});
};

export {createUserAction, clearSignUpState};
