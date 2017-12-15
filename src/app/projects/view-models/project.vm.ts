import { TimeEntry } from "../../../shared/model/time-entry";
import { TimeEntryViewModel } from "./time-entry.vm";

export interface ProjectViewModel {
  name: string;
  userNames: string[];
  weeklyTimeEntries: TimeEntryViewModel[];
  weeklyTotalTime: number;
  totalTime: number;
}