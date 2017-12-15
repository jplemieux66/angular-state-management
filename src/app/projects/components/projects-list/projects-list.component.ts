import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProjectViewModel } from '../../view-models/project.vm';
import { FormControl, FormGroup } from '@angular/forms';
import { WeekInfo } from '../../../../shared/model/week-info.model';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  @Input() projects: ProjectViewModel[];

  constructor() { }
}
