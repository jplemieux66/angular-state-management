import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ProjectsListComponent],
  exports: [
    ProjectsListComponent
  ]
})
export class ProjectsModule { }
