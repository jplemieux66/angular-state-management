import * as project from './../actions/project';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { ProjectsService } from './../services/projects.service';
import { TimeEntriesService } from '../services/time-entries.service';

@Injectable()
export class ProjectEffects {
  @Effect()
  loadProjectsDetails$: Observable<Action> = this.actions$
    .ofType<project.LoadProjectsDetails>(project.LOAD_PROJECTS_DETAILS)
    .switchMap(action => this.projectsService.loadProjectsDetails(action.payload))
    .map(projectDetails => new project.ProjectsDetailsLoaded(projectDetails));

  @Effect()
  addTimeEntry$: Observable<Action> = this.actions$
    .ofType<project.AddTimeEntry>(project.ADD_TIME_ENTRY)
    .mergeMap(action => {
      const { date, projectId, userId, time } = action.payload;
      return this.timeEntriesService.addTimeEntry(date, projectId, userId, time);
    })
    .map(timeEntry => new project.TimeEntryAdded(timeEntry));

  @Effect()
  updateTimeEntry$: Observable<Action> = this.actions$
    .ofType<project.UpdateTimeEntry>(project.UPDATE_TIME_ENTRY)
    .mergeMap(action => {
      const { id, newTime } = action.payload;
      return this.timeEntriesService.updateTimeEntry(id, newTime) 
    })
    .map(timeEntry => new project.TimeEntryUpdated(timeEntry));

  @Effect()
  deleteTimeEntry$: Observable<Action> = this.actions$
    .ofType<project.DeleteTimeEntry>(project.DELETE_TIME_ENTRY)
    .mergeMap(action => this.timeEntriesService.deleteTimeEntry(action.payload))
    .map(timeEntry => new project.TimeEntryDeleted(timeEntry));

  constructor(private actions$: Actions,
              private projectsService: ProjectsService,
              private timeEntriesService: TimeEntriesService) { }
}