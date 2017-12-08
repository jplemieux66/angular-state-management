import { Action } from "@ngrx/store";

export const LOAD_PROJECTS_ACTION = '[Projects] LoadProjects';

export class LoadProjects implements Action {
  readonly type = LOAD_PROJECTS_ACTION;

  constructor(public payload: number) { }
}

export type Actions = LoadProjects;