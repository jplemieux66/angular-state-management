import { ProjectsDetails } from "../../../shared/model/user-projects-details";
import * as fromRoot from '../../reducers';
import * as fromProjects from './projects';

export interface ProjectsState {
  projects: fromProjects.State
}

export interface State extends fromRoot.State {
  projects: ProjectsState;
}

export const reducers = {
  projects: fromProjects.reducer
}