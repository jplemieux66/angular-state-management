import { Moment } from "moment";
import * as moment from 'moment';
import { dbTimeEntries } from "../db-data";
import { TimeEntry } from "../../shared/model/time-entry";

export function addTimeEntry(date: string, projectId: number, userId: number, time: number): TimeEntry {
  let id: number = Object.keys(dbTimeEntries).reduce(function(a, b){ return a > parseInt(b) ? a : parseInt(b) }, 0);
  id++;
  
  const newTimeEntry = {
    id,
    date: moment(date).toDate(),
    projectId,
    userId,
    time
  };

  dbTimeEntries[id] = newTimeEntry;

  return newTimeEntry;
}