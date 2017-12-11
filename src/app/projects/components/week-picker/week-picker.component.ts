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
export class WeekPickerComponent implements OnChanges {
  selectedDate: FormControl = new FormControl();

  currentWeekDisplay: string = "Choose a week";

  @Input() currentlySelectedWeek: WeekInfo;

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

    // Change current week display
    this.currentWeekDisplay = `Current week: ${weekStartDate.format('DD/M/YYYY')} to ${weekEndDate.format('DD/M/YYYY')}`;
  }

  ngOnChanges() {
    if (this.currentlySelectedWeek != this.previouslySelectedWeek) {
      this.selectedDate.setValue(this.currentlySelectedWeek.startDate);
      this.previouslySelectedWeek = this.currentlySelectedWeek;
    }
  }

  firstWeekDayOnlyFilter = (m: Moment): boolean => {
    const day = m.day();
    return day == 0;
  }
}
