import * as moment from 'moment';
import * as date from '../actions/dates';
import { WeekInfo } from './../../../shared/model/week-info.model';

export interface State {
  selectedWeekInfo: WeekInfo;
}

export const initialState: State = {
  selectedWeekInfo: {
    startDate: moment().weekday(0),
    endDate: moment().weekday(6)
  }
}

export function reducer(
  state = initialState,
  action: date.Actions
): State {
  switch (action.type) {
    case date.CHANGE_SELECTED_WEEK:
      return {
        selectedWeekInfo: action.payload
      }

    default:
      return state;
  }
}

export const getSelectedWeekInfo = (state: State) => state.selectedWeekInfo;