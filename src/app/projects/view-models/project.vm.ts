import { TimeEntry } from "../../../shared/model/time-entry";

export interface ProjectViewModel {
  name: string;
  userNames: string[];
  weeklyTimeEntries: TimeEntry[];
  weeklyTotalTime: number;
  totalTime: number;
}