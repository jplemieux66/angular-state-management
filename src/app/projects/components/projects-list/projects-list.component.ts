import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProjectViewModel } from '../../view-models/project.vm';
import { FormControl, FormGroup } from '@angular/forms';
import { WeekInfo } from '../../../../shared/model/week-info.model';
import { Store } from '@ngrx/store';
import * as fromProjects from '../../reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  selectedWeekInfo$: Observable<WeekInfo>;
  
  projectViewModels$: Observable<ProjectViewModel[]>

  constructor(private store: Store<fromProjects.State>) {
    this.selectedWeekInfo$ = this.store.select(fromProjects.getSelectedWeekInfo);

    this.projectViewModels$ = this.store.select(fromProjects.getProjectViewModels);
  }
}