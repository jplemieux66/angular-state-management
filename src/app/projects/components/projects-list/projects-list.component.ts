import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProjectViewModel } from '../../view-models/project.vm';
import { FormControl, FormGroup } from '@angular/forms';
import { WeekInfo } from '../../../../shared/model/week-info.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TimeEntryChange, TimeEntryChangeType } from '../project-display/time-entry-change.model';
import { TimeEntry } from '../../../../shared/model/time-entry';

import * as fromProjects from '../../reducers';
import * as fromRoot from '../../../reducers';
import { getTimeEntryId } from '../../utils/utils';
import { AddTimeEntry, AddTimeEntryPayload, UpdateTimeEntryPayload, UpdateTimeEntry, DeleteTimeEntry } from '../../actions/project';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  selectedWeekInfo$: Observable<WeekInfo>;
  
  projectViewModels$: Observable<ProjectViewModel[]>;

  timeEntries$: Observable<TimeEntry[]>;

  userId: number;

  constructor(private store: Store<fromProjects.State>) {
    this.selectedWeekInfo$ = this.store.select(fromProjects.getSelectedWeekInfo);

    this.projectViewModels$ = this.store.select(fromProjects.getProjectViewModels);

    this.timeEntries$ = this.store.select(fromProjects.getTimeEntries);

    this.store.select(fromRoot.getUserId).subscribe(userId => this.userId = userId);
  }

  timeEntriesChanged(timeEntryChanges: TimeEntryChange[]) {
    timeEntryChanges.forEach(timeEntryChange => {
      switch(timeEntryChange.type) {

        case TimeEntryChangeType.Add:
          this.dispatchAddTimeEntry(timeEntryChange)
          break;

        case TimeEntryChangeType.Update: {
          this.dispatchUpdateTimeEntry(timeEntryChange);
          break;
        }

        case TimeEntryChangeType.Delete: {
          this.dispatchDeleteTimeEntry(timeEntryChange);
          break;
        }
      }
    });
  }

  private dispatchAddTimeEntry(timeEntryChange: TimeEntryChange) {
    const { date, projectId, newTime } = timeEntryChange;
    
    const payload: AddTimeEntryPayload = {
      date,
      projectId,
      userId: this.userId,
      time: newTime
    };
    
    this.store.dispatch(new AddTimeEntry(payload));
  }

  private dispatchUpdateTimeEntry(timeEntryChange: TimeEntryChange) {
    const { timeEntryId, newTime } = timeEntryChange;
    
    const payload: UpdateTimeEntryPayload = {
      id: timeEntryId,
      newTime
    }
    
    this.store.dispatch(new UpdateTimeEntry(payload));
  }

  private dispatchDeleteTimeEntry(timeEntryChange: TimeEntryChange) {
    const { timeEntryId } = timeEntryChange;
    
    this.store.dispatch(new DeleteTimeEntry(timeEntryId));
  }
}