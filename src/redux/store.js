import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import GetQuizReducer from '../redux/reducers/GetQuizReducer';
import getPreviousScoreReducer from './reducers/getPreviousScoreReducer';
import saveScoreReducer from './reducers/saveScoreReducer';
import loginUserReducer from './reducers/loginUserReducer';
import createUserReducer from './reducers/signupUserReducer';
import getUserInfoReducer from './reducers/getUserInfoReducer';
import updateUserReducer from './reducers/updateUserReducer';
import deleteUserReducer from './reducers/deleteUserReducer';

const reducers = combineReducers({
  GetQuizReducer,
  getPreviousScoreReducer,
  saveScoreReducer,
  createUserReducer,
  loginUserReducer,
  getUserInfoReducer,
  updateUserReducer,
  deleteUserReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
