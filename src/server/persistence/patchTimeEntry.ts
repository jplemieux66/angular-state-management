import { dbTimeEntries } from "../db-data";

export const patchTimeEntry = (timeEntryId: number, newTime: number) => {
  dbTimeEntries[timeEntryId].time = newTime;
  return dbTimeEntries[timeEntryId];
}