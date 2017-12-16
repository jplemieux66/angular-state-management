import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './../core/reducers/user';

export interface State {
  user: fromUser.State
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer
}

export const getUserState = createFeatureSelector<fromUser.State>('user');

export const getUserId = createSelector(
  getUserState,
  fromUser.getUserId
);