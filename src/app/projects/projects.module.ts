import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [ProjectsListComponent],
  exports: [
    ProjectsListComponent
  ]
})
export class ProjectsModule { }
