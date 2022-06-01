import { combineReducers } from 'redux';
import gameAction from './game';
import loginAction from './login';
import player from './score';

const rootReducer = combineReducers({ loginAction, gameAction, player });

export default rootReducer;
