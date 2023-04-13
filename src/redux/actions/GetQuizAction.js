import {
  GET_QUIZ_LOADING,
  GET_QUIZ_SUCCESS,
  CLEAR_QUIZ_STATE,
  GET_QUIZ_ERROR,
} from '../actionTypes';
import Toast from 'react-native-simple-toast';

const GetQuizAction = data => async dispatch => {
  const {questionId, categoryId, difficultyId, typeId} = data;
  let url = `https://opentdb.com/api.php?amount=${parseInt(questionId)}`;

  if (categoryId != '0') {
    url = url + `&category=${parseInt(categoryId)}`;
  }
  if (difficultyId != '0') {
    url = url + `&difficulty=${difficultyId}`;
  }
  if (typeId != '0') {
    url = url + `&type=${typeId}`;
  }
  dispatch({type: GET_QUIZ_LOADING});
  try {
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson?.results.length > 0) {
          let quizData = [];
          responseJson?.results.map(item => {
            let randomIndex =
              item?.type == 'multiple'
                ? Math.floor(Math.random() * 4 + 0)
                : Math.floor(Math.random() * 2 + 0);
            item?.incorrect_answers.splice(
              randomIndex,
              0,
              item?.correct_answer,
            );
            quizData.push(item);
          });
          dispatch({type: GET_QUIZ_SUCCESS, payload: quizData});
        } else {
          Toast.show('Sorry questions not found', Toast.LONG);
          dispatch({type: CLEAR_QUIZ_STATE});
        }
      });
  } catch (error) {
    console.log('Error while getting quiz', error);
    dispatch({type: GET_QUIZ_ERROR});
  }
};

const clearQuizState = () => dispatch => {
  dispatch({type: CLEAR_QUIZ_STATE});
};

export {GetQuizAction, clearQuizState};
