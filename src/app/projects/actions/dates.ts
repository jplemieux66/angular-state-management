import { Action } from '@ngrx/store';
import { WeekInfo } from '../../../shared/model/week-info.model';

export const CHANGE_SELECTED_WEEK = '[Dates] Change Selected Week';

export class ChangeSelectedWeek implements Action {
  readonly type = CHANGE_SELECTED_WEEK;

  constructor(public payload: WeekInfo) { }
}

export type Actions = ChangeSelectedWeek;