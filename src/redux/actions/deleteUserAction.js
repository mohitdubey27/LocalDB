import {
  DELETE_USER_ACTION_LOADING,
  DELETE_USER_ACTION_SUCCESS,
  DELETE_USER_ACTION_ERROR,
} from '../actionTypes';
import {deleteScores} from '../../services/db-service';
import {deleteUser} from '../../services/login-signup-service';
import Toast from 'react-native-simple-toast';

const deleteUserAction = data => async dispatch => {
  dispatch({type: DELETE_USER_ACTION_LOADING});
  try {
    const deleteResult = await deleteUser(data);
    const deleteScore = await deleteScores(data);
    if (deleteResult && deleteScore) {
      Toast.show('Account deleted successfully', Toast.LONG);
      dispatch({
        type: DELETE_USER_ACTION_SUCCESS,
        payload: {message: 'Account Deleted Successfully', isDeleted: true},
      });
    } else {
      Toast.show('Something went wrong', Toast.LONG);
      dispatch({
        type: DELETE_USER_ACTION_ERROR,
        payload: {message: 'Error while deleting user', isDeleted: false},
      });
    }
  } catch (error) {
    console.log('Error while deleting user', error);
  }
};

export default deleteUserAction;
