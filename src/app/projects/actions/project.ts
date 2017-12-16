import { Action } from "@ngrx/store";
import { ProjectsDetails } from "../../../shared/model/user-projects-details";
import { Moment } from "moment";
import { TimeEntry } from "../../../shared/model/time-entry";

export const LOAD_PROJECTS_DETAILS = '[Projects] LoadProjectsDetails';
export const PROJECTS_DETAILS_LOADED = '[Projects] ProjectsDetailsLoaded';
export const ADD_TIME_ENTRY = '[Projects] AddTimeEntry';
export const TIME_ENTRY_ADDED = '[Projects] TimeEntryAdded';
export const UPDATE_TIME_ENTRY = '[Projects] UpdateTimeEntry';
export const TIME_ENTRY_UPDATED = '[Projects] TimeEntryUpdated'
export const DELETE_TIME_ENTRY = '[Projects] DeleteTimeEntry';
export const TIME_ENTRY_DELETED = '[Projects] TimeEntryDeleted';

export class LoadProjectsDetails implements Action {
  readonly type = LOAD_PROJECTS_DETAILS;

  constructor(public payload: number) { }
}

export class ProjectsDetailsLoaded implements Action {
  readonly type = PROJECTS_DETAILS_LOADED;

  constructor(public payload: ProjectsDetails) { }
}

export interface AddTimeEntryPayload {
  date: Moment;
  projectId: number;
  userId: number;
  time: number;
}

export class AddTimeEntry implements Action {
  readonly type = ADD_TIME_ENTRY;

  constructor(public payload: AddTimeEntryPayload) { }
}

export class TimeEntryAdded implements Action {
  readonly type = TIME_ENTRY_ADDED;

  constructor(public payload: TimeEntry) { }
}

export interface UpdateTimeEntryPayload {
  id: number;
  newTime: number;
}

export class UpdateTimeEntry implements Action {
  readonly type = UPDATE_TIME_ENTRY;

  constructor(public payload: UpdateTimeEntryPayload) { }
}

export class TimeEntryUpdated implements Action {
  readonly type = TIME_ENTRY_UPDATED;

  constructor(public payload: TimeEntry) { }
}

export class DeleteTimeEntry implements Action {
  readonly type = DELETE_TIME_ENTRY;

  constructor(public payload: number) { }
}

export class TimeEntryDeleted implements Action {
  readonly type = TIME_ENTRY_DELETED;

  constructor(public payload: TimeEntry) { }
}

export type Actions = LoadProjectsDetails | 
                      ProjectsDetailsLoaded | 
                      AddTimeEntry | 
                      TimeEntryAdded |
                      UpdateTimeEntry |
                      TimeEntryUpdated |
                      DeleteTimeEntry | 
                      TimeEntryDeleted;