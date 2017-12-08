import { User } from "./user";
import { Project } from "./project";
import { TimeEntry } from "./time-entry";

export interface ProjectsDetails {
  projects: Project[];
  projectsUsers: User[];
  timeEntries: TimeEntry[];
}