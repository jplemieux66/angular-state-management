import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Moment } from 'moment';
import { MatDatepickerInputEvent } from '@angular/material';
import { WeekInfo } from '../week-info.model';

@Component({
  selector: 'week-picker',
  templateUrl: './week-picker.component.html',
  styleUrls: ['./week-picker.component.scss']
})
export class WeekPickerComponent implements OnInit {
  currentWeekDisplay: string = "Choose a week";

  @Output() weekSelectedChanged: EventEmitter<WeekInfo> = new EventEmitter<WeekInfo>();

  constructor() { }

  ngOnInit() {
  }

  firstWeekDayOnlyFilter = (m: Moment): boolean => {
    const day = m.day();
    return day == 0;
  }

  onDateChange(event: MatDatepickerInputEvent<Moment>) {
    const date: Moment = event.value;
    // Emit new weekSelectedEvent
    const weekStartDate: Moment = date.clone().weekday(0);
    const weekEndDate: Moment = date.clone().weekday(6);
    this.weekSelectedChanged.emit({
      startDate: weekStartDate,
      endDate: weekEndDate
    });

    // Change current week display
    this.currentWeekDisplay = `Current week: ${weekStartDate.format('DD/M/YYYY')} to ${weekEndDate.format('DD/M/YYYY')}`;
  }

}
