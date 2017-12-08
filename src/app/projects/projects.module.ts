import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forFeature('projects', reducers)
  ],
  declarations: [ProjectsListComponent],
  exports: [
    ProjectsListComponent
  ]
})
export class ProjectsModule { }
