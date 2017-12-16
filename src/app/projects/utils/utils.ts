import { TimeEntry } from "../../../shared/model/time-entry";

export function getTimeEntryId(timeEntries: TimeEntry[], date: Date, projectId: number, userId: number): number {
  const timeEntry = timeEntries.find(timeEntry => {
    return timeEntry.date == date &&
           timeEntry.projectId == projectId &&
           timeEntry.userId == userId
  });
  return timeEntry.id;
};