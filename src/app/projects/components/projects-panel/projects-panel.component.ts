import { Component, OnInit } from '@angular/core';
import * as fromProjects from '../../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { WeekInfo } from '../../../../shared/model/week-info.model';
import { ChangeSelectedWeek } from '../../actions/date';
import { ProjectViewModel } from '../../view-models/project.vm';
import { LoadProjectsDetails } from '../../actions/project';

@Component({
  selector: 'projects-panel',
  templateUrl: './projects-panel.component.html',
  styleUrls: ['./projects-panel.component.css']
})
export class ProjectsPanelComponent {
  selectedWeekInfo$: Observable<WeekInfo>;
  projectViewModels$: Observable<ProjectViewModel[]>

  constructor(private store: Store<fromProjects.State>) {
    this.selectedWeekInfo$ = this.store.select(fromProjects.getSelectedWeekInfo);

    this.projectViewModels$ = this.store.select(fromProjects.getProjectViewModels);

    this.store.dispatch(new LoadProjectsDetails(1));
  }

  weekSelectedChanged(selectedWeekInfo: WeekInfo) {
    this.store.dispatch(new ChangeSelectedWeek(selectedWeekInfo));
  }

}
