import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { ProjectsPanelComponent } from './components/projects-panel/projects-panel.component';
import { WeekPickerComponent } from './components/week-picker/week-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectEffects } from './effects/project';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsService } from './services/projects.service';
import { ProjectDisplayComponent } from './components/project-display/project-display.component';
import { TimeEntriesService } from './services/time-entries.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('projects', reducers),
    EffectsModule.forFeature([ ProjectEffects ])
  ],
  declarations: [
    ProjectsListComponent, 
    ProjectsPanelComponent,
    WeekPickerComponent,
    ProjectDisplayComponent
  ],
  exports: [
    ProjectsPanelComponent
  ],
  providers: [ 
    ProjectsService,
    TimeEntriesService
  ]
})
export class ProjectsModule { }
