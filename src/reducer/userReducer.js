import { SAVE_USER_LS_DATA } from '../actions';

const INITIAL_STATE = {
  mealsToken: 1,
  cocktailsToken: 1,
  user: { email: '' },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER_LS_DATA:
    return {
      ...state,
      ...action.data,
    };
  default: return state;
  }
};

export default userReducer;
