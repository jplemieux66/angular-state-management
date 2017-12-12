import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProjectViewModel } from '../../view-models/project.vm';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  @Input() projects: ProjectViewModel[];

  constructor() { }
}
