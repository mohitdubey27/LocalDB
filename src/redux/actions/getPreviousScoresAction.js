import {
  GET_PREVIOUS_SCORE_LOADING,
  GET_PREVIOUS_SCORE_SUCCESS,
  GET_PREVIOUS_SCORE_ERROR,
} from '../actionTypes';
import {createTable, getPreviousScores} from '../../services/db-service';

const getPreviousScoresAction = data => async dispatch => {
  dispatch({type: GET_PREVIOUS_SCORE_LOADING});
  try {
    await createTable();
    const storedScores = await getPreviousScores(data);
    if (storedScores?.length > 0) {
      dispatch({type: GET_PREVIOUS_SCORE_SUCCESS, payload: storedScores});
    } else {
      dispatch({
        type: GET_PREVIOUS_SCORE_ERROR,
      });
    }
  } catch (error) {
    console.log('Error while getting previous score', error);
  }
};

export default getPreviousScoresAction;
