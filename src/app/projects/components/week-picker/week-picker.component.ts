import { Component, OnChanges, EventEmitter, Output } from '@angular/core';
import { Moment } from 'moment';
import { MatDatepickerInputEvent } from '@angular/material';
import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeekInfo } from '../../../../shared/model/week-info.model';

@Component({
  selector: 'week-picker',
  templateUrl: './week-picker.component.html',
  styleUrls: ['./week-picker.component.scss']
})
export class WeekPickerComponent {
  selectedDate: FormControl = new FormControl();

  currentWeekDisplay: string = "Choose a week";

  // currentlySelectedWeek
  _currentlySelectedWeek: WeekInfo;

  get currentlySelectedWeek(): WeekInfo {
    return this._currentlySelectedWeek;
  }

  @Input('currentlySelectedWeek')
  set currentlySelectedWeek(value: WeekInfo) {
    this._currentlySelectedWeek = value;
    this.updateSelectedWeek();
  }

  @Output() onWeekSelectedChanged: EventEmitter<WeekInfo> = new EventEmitter<WeekInfo>();

  private previouslySelectedWeek: WeekInfo = null;

  constructor() { }

  onDateChange(event: MatDatepickerInputEvent<Moment>) {
    const date: Moment = event.value;

    // Emit new weekSelectedEvent
    const weekStartDate: Moment = date.clone().weekday(0);
    const weekEndDate: Moment = date.clone().weekday(6);
    const selectedWeek: WeekInfo = {
      startDate: weekStartDate,
      endDate: weekEndDate
    }
    this.onWeekSelectedChanged.emit(selectedWeek);
  }

  firstWeekDayOnlyFilter = (m: Moment): boolean => {
    const day = m.day();
    return day == 0;
  }

  updateSelectedWeek() {
    if (this.currentlySelectedWeek != this.previouslySelectedWeek) {
      this.previouslySelectedWeek = this.currentlySelectedWeek;

      const weekStartDate = this.currentlySelectedWeek.startDate;
      const weekEndDate = this.currentlySelectedWeek.endDate;

      this.selectedDate.setValue(weekStartDate);

      // Change current week display
      this.currentWeekDisplay = `Current week: ${weekStartDate.format('DD/M/YYYY')} to ${weekEndDate.format('DD/M/YYYY')}`;
    }
  }
}
