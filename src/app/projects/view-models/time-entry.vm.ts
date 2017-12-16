import { Moment } from "moment";

export interface TimeEntryViewModel {
  id: number;
  date: Moment;
  time: number;
}