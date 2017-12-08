import { ProjectsDetails } from "../../../shared/model/user-projects-details";
import * as project from '../actions/project';

export interface State {
  projectsDetails: ProjectsDetails
}

export const initialState: State = {
  projectsDetails: {
    projects: [],
    projectsUsers: [],
    timeEntries: []
  }
}

export function reducer(
  state = initialState,
  action: project.Actions
): State {
  switch(action.type) {
    default: 
      return state;
  }
}