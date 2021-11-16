import { combineReducers } from 'redux';
import user from './userReducer';
import recipes from './recipesReducer';

const rootReducer = combineReducers({
  user,
  recipes,
});

export default rootReducer;
