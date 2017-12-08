import * as moment from 'moment';
import { WeekInfo } from '../dates/week-info.model';
import * as date from '../actions/date';

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