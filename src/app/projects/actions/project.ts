import { Action } from "@ngrx/store";
import { ProjectsDetails } from "../../../shared/model/user-projects-details";

export const LOAD_PROJECTS_DETAILS = '[Projects] LoadProjectsDetails';
export const PROJECTS_DETAILS_LOADED = '[Projects] ProjectsDetailsLoaded';

export class LoadProjectsDetails implements Action {
  readonly type = LOAD_PROJECTS_DETAILS;

  constructor(public payload: number) { }
}

export class ProjectsDetailsLoaded implements Action {
  readonly type = PROJECTS_DETAILS_LOADED;

  constructor(public payload: ProjectsDetails) { }
}

export type Actions = LoadProjectsDetails | ProjectsDetailsLoaded;