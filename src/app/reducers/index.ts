import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromDates from './dates';

export interface State {
  dates: fromDates.State;
}

export const reducers: ActionReducerMap<State> = {
  dates: fromDates.reducer
}

export const getDatesState = createFeatureSelector<fromDates.State>('dates');

export const getSelectedWeekInfo = createSelector(
  getDatesState,
  fromDates.getSelectedWeekInfo
);