import { combineReducers } from 'redux';
import gameAction from './game';
import loginAction from './login';
import scoreAction from './score';

const rootReducer = combineReducers({ loginAction, gameAction, scoreAction });

export default rootReducer;
