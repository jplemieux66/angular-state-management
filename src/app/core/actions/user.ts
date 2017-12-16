import { Action } from '@ngrx/store';

export const CHANGE_USER = '[User] Change User';

export class ChangeUser implements Action {
  readonly type = CHANGE_USER;

  constructor(public payload: number) {}
}

export type Actions = ChangeUser;