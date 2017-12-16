import { ProjectsDetails } from "../../../shared/model/user-projects-details";
import * as project from '../actions/project';
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
    case project.PROJECTS_DETAILS_LOADED: {
      return action.payload
    }

    case project.TIME_ENTRY_ADDED: {
      let newTimeEntries = state.timeEntries.slice();
      newTimeEntries.push(action.payload);

      return {
        ...state,
        timeEntries: newTimeEntries
      };
    }

    case project.TIME_ENTRY_UPDATED: {
      const updatedTimeEntry = action.payload;
      let newTimeEntries = state.timeEntries.slice();
      const index = newTimeEntries.findIndex(timeEntry => timeEntry.id == updatedTimeEntry.id);
      newTimeEntries[index] = updatedTimeEntry;

      return {
        ...state,
        timeEntries: newTimeEntries
      };
    }

    case project.TIME_ENTRY_DELETED: {
      const deletedTimeEntryId = action.payload.id;
      let newTimeEntries = state.timeEntries.slice();
      const index = newTimeEntries.findIndex(timeEntry => timeEntry.id == deletedTimeEntryId);
      newTimeEntries.splice(index, 1);

      return {
        ...state,
        timeEntries: newTimeEntries
      };
    }

    default: 
      return state;
  }
}

export const getProjects = (state: State) => state.projects;

export const getProjectsUsers = (state: State) => state.projectsUsers;

export const getTimeEntries = (state: State) => state.timeEntries;