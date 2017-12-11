import * as project from './../actions/project';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { ProjectsService } from './../services/projects.service';

@Injectable()
export class ProjectEffects {
  @Effect()
  loadProjectsDetails$: Observable<Action> = this.actions$
    .ofType<project.LoadProjectsDetails>(project.LOAD_PROJECTS_DETAILS)
    .switchMap(action => this.projectsService.loadProjectsDetails(action.payload))
    .map(projectDetails => new project.ProjectsDetailsLoaded(projectDetails));
  
  constructor(private actions$: Actions,
              private projectsService: ProjectsService) { }
}