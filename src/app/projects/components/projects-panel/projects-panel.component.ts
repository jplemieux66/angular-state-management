import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { WeekInfo } from '../../../../shared/model/week-info.model';
import { ChangeSelectedWeek } from '../../actions/dates';
import { ProjectViewModel } from '../../view-models/project.vm';
import { LoadProjectsDetails } from '../../actions/project';

import * as fromProjects from '../../reducers';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'projects-panel',
  templateUrl: './projects-panel.component.html',
  styleUrls: ['./projects-panel.component.css']
})
export class ProjectsPanelComponent {
  selectedWeekInfo$: Observable<WeekInfo>;

  userId: number;

  constructor(private store: Store<fromProjects.State>) {
    this.selectedWeekInfo$ = this.store.select(fromProjects.getSelectedWeekInfo);

    this.store.select(fromRoot.getUserId).subscribe(userId => this.userId = userId);

    this.store.dispatch(new LoadProjectsDetails(this.userId));
  }

  weekSelectedChanged(selectedWeekInfo: WeekInfo) {
    this.store.dispatch(new ChangeSelectedWeek(selectedWeekInfo));
  }

}
