import { combineReducers } from 'redux';
import gameAction from './Game';
import loginAction from './login';

const rootReducer = combineReducers({ loginAction, gameAction });

export default rootReducer;
