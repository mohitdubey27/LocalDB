import {
  SAVE_SCORE_ACTION_LOADING,
  SAVE_SCORE_ACTION_SUCCESS,
  SAVE_SCORE_ACTION_ERROR,
} from '../actionTypes';
import {createTable, saveScores} from '../../services/db-service';

const saveScoreAction = data => async dispatch => {
  dispatch({type: SAVE_SCORE_ACTION_LOADING});
  try {
    await createTable();
    await saveScores(data);
    dispatch({type: SAVE_SCORE_ACTION_SUCCESS, paylaod: data});
  } catch (error) {
    console.log('Error while saving score', error);
    dispatch({type: SAVE_SCORE_ACTION_ERROR, paylaod: error});
  }
};

export default saveScoreAction;
