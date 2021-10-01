import { combineReducers } from 'redux';

import usersReducer from './users';
import coordenadasUser from './coordendas';

export default combineReducers({
  usersReducer, coordenadasUser
});
