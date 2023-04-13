import {
  UPDATE_USER_ACTION_LOADING,
  UPDATE_USER_ACTION_SUCCESS,
  UPDATE_USER_ACTION_ERROR,
} from '../actionTypes';
import {updateUser} from '../../services/login-signup-service';
import Toast from 'react-native-simple-toast';

const updateUserAction = data => async dispatch => {
  dispatch({type: UPDATE_USER_ACTION_LOADING});
  try {
    const userUpdated = await updateUser(data);
    if (userUpdated) {
      Toast.show('User updated successfully', Toast.LONG);
      dispatch({type: UPDATE_USER_ACTION_SUCCESS, payload: data});
    } else {
      Toast.show('Something went wrong!', Toast.LONG);
      dispatch({
        type: UPDATE_USER_ACTION_ERROR,
        paylaod: {message: 'Something went wrong!'},
      });
    }
  } catch (error) {
    console.log('Error while updating user=======>', error);
  }
};

export default updateUserAction;
