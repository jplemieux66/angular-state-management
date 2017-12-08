export interface ProjectWeeklyViewModel {
  id: number;
  name: string;
  userNames: string[];
  weeklyTimeEntries: number[];
  weeklyTotalTime: number;
  totalTime: number;
}