import { Moment } from "moment";

export interface TimeEntryChange {
  timeEntryId?: number;
  projectId?: number;
  date?: Moment;
  type: TimeEntryChangeType;
  newTime?: number;
}

export enum TimeEntryChangeType {
  Add,
  Update,
  Delete
};