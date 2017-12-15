import { Component, OnInit, Input } from '@angular/core';
import { WeekInfo } from '../../../../shared/model/week-info.model';
import { ProjectViewModel } from '../../view-models/project.vm';
import { Moment } from 'moment';
import { TimeEntryViewModel } from '../../view-models/time-entry.vm';

@Component({
  selector: 'project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent {
  @Input() project: ProjectViewModel;

  private _selectedWeekInfo: WeekInfo;

  get selectedWeekInfo(): WeekInfo {
    return this._selectedWeekInfo;
  }

  @Input('selectedWeekInfo')
  set selectedWeekInfo(value: WeekInfo) {
    if (value != this._selectedWeekInfo) {
      this._selectedWeekInfo = value;
      this.updateTimeEntries();
    }
  }

  timeEntries: TimeEntryViewModel[] = [];

  constructor() { }

  updateTimeEntries() {
    let curDate: Moment = this.selectedWeekInfo.startDate;
    let timeEntries = [];

    while (curDate <= this.selectedWeekInfo.endDate) {
      let curTimeEntry: TimeEntryViewModel;
      // If there is a time entry at the specified date for this project, we take it
      this.project.weeklyTimeEntries.forEach((timeEntry) => {
        if (timeEntry.date == curDate) {
          curTimeEntry = timeEntry;
        }
      });

      // Else, we create a new empty time entry for display
      if (!curTimeEntry) {
        curTimeEntry = {
          date: curDate.clone(),
          time: 0
        };
      }

      curDate.add(1, 'd');

      timeEntries.push(curTimeEntry);
    }

    this.timeEntries = timeEntries;
  }
}