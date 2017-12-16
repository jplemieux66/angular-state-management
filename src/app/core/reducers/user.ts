import * as user from './../actions/user';

export interface State {
  userId: number;
}

const initialState: State = {
  userId: 1
};

export function reducer(state = initialState, action: user.Actions) {
  switch(action.type) {
    case user.CHANGE_USER:
      return {
        userId: action.payload
      };

    default:
      return state;
  }
}

export const getUserId = (state: State) => state.userId;