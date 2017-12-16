import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { WeekInfo } from '../../../../shared/model/week-info.model';
import { ProjectViewModel } from '../../view-models/project.vm';
import { Moment } from 'moment';
import { TimeEntryViewModel } from '../../view-models/time-entry.vm';
import { FormGroup, FormControl } from '@angular/forms';
import { TimeEntryChange, TimeEntryChangeType } from './time-entry-change.model';

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

  @Output() onTimeEntriesChanged = new EventEmitter<TimeEntryChange[]>()

  weeklyTotalTime: number = 0;

  timeEntriesGroup: FormGroup = new FormGroup({});

  timeEntries: TimeEntryViewModel[] = [];

  constructor() {
    this.updateWeeklyTotalTime = this.updateWeeklyTotalTime.bind(this);
  }

  updateTimeEntries() {
    let curDate: Moment = this.selectedWeekInfo.startDate.clone();
    let timeEntries = [];

    while (curDate <= this.selectedWeekInfo.endDate) { 
      
      let curTimeEntry: TimeEntryViewModel;
      // If there is a time entry at the specified date for this project, we take it
      this.project.weeklyTimeEntries.forEach((timeEntry) => {
        if (timeEntry.date.isSame(curDate)) {
          curTimeEntry = timeEntry;
        }
      });

      // Else, we create a new empty time entry for display
      if (!curTimeEntry) {
        curTimeEntry = {
          id: undefined,
          date: curDate.clone(),
          time: 0
        };
      }

      timeEntries.push(curTimeEntry);

      // Create a FormControl
      const formControlKey: string = curTimeEntry.date.toString();
      const formControl: FormControl = new FormControl(formControlKey)
      formControl.setValue(curTimeEntry.time);
      formControl.valueChanges.subscribe((this.updateWeeklyTotalTime));

      this.timeEntriesGroup.addControl(formControlKey, formControl);

      curDate.add(1, 'd');
    }

    this.timeEntries = timeEntries;
    this.updateWeeklyTotalTime();
  }

  updateWeeklyTotalTime(): void {
    this.weeklyTotalTime = Object.keys(this.timeEntriesGroup.controls)
                                .reduce((prev, curKey) => prev + this.timeEntriesGroup.get(curKey).value, 0);
  }

  submitTimeEntries() {
    let timeEntryChanges: TimeEntryChange[] = []

    Object.keys(this.timeEntriesGroup.controls).forEach(key => {
      const control = this.timeEntriesGroup.get(key);

      // If the input hasn't been modified, return immediately
      if (!control.dirty) {
        return;
      }

      // Else, verify if the new value is different from the value received initially
      const inputTimeEntry = this.timeEntries.find(timeEntry => timeEntry.date.toString() == key);
      if(inputTimeEntry.time != control.value) {
        // Case: Add Time Entry
        if (inputTimeEntry.time == 0) {
          timeEntryChanges.push({
            type: TimeEntryChangeType.Add,
            date: inputTimeEntry.date,
            projectId: this.project.id,
            newTime: control.value
          });
        }
        // Case: Delete Time Entry 
        else if (control.value == 0) {
          timeEntryChanges.push({
            timeEntryId: inputTimeEntry.id,
            type: TimeEntryChangeType.Delete
          });
        }
        // Case: Update Time Entry
        else {
          timeEntryChanges.push({
            timeEntryId: inputTimeEntry.id,
            type: TimeEntryChangeType.Update,
            newTime: control.value
          });
        }
      }
    });

    if (timeEntryChanges.length > 0) {
      this.onTimeEntriesChanged.emit(timeEntryChanges);
    }
  }
}