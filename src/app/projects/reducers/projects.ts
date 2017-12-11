import { ProjectsDetails } from "../../../shared/model/user-projects-details";
import * as project from '../actions/project';
import { PROJECTS_DETAILS_LOADED } from "../actions/project";
import { ProjectViewModel } from "../view-models/project.vm";
import { Project } from "../../../shared/model/project";
import * as _ from 'lodash';
import { TimeEntry } from "../../../shared/model/time-entry";
import { User } from "../../../shared/model/user";

export interface State extends ProjectsDetails { }

export const initialState: State = {
  projects: [],
  projectsUsers: [],
  timeEntries: []
}

export function reducer(
  state = initialState,
  action: project.Actions
): State {
  switch(action.type) {
    case PROJECTS_DETAILS_LOADED: {
      return action.payload
    }

    default: 
      return state;
  }
}

export const getProjects = (state: State) => state.projects;

export const getProjectsUsers = (state: State) => state.projectsUsers;

export const getTimeEntries = (state: State) => state.timeEntries;