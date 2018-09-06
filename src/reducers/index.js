import {combineReducers} from 'redux';
import authorisation from './authorisation';
import role from './role';

const rootReducer = combineReducers({
	authorisation,
	role,
});

export default rootReducer;
