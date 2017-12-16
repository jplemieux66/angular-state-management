import { dbTimeEntries } from "../db-data";

export const deleteTimeEntry = (timeEntryId: number) => {
  const timeEntry = dbTimeEntries[timeEntryId];
  delete dbTimeEntries[timeEntryId];
  return timeEntry;
}