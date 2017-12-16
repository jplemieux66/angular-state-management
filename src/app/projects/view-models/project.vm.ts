import { TimeEntry } from "../../../shared/model/time-entry";
import { TimeEntryViewModel } from "./time-entry.vm";

export interface ProjectViewModel {
  id: number;
  name: string;
  userNames: string[];
  weeklyTimeEntries: TimeEntryViewModel[];
}