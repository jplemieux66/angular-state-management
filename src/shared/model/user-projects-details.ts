import { User } from "./user";
import { Project } from "./project";
import { TimeEntry } from "./time-entry";

export interface UserProjectsDetails {
  user: User;
  projects: Project[];
  timeEntries: TimeEntry[];
}