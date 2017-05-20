import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';


const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
    debugger;
      newState[action.user.id] = action.user;
      return newState;

    default:
      return state;
  }
};

export default UserReducer;
