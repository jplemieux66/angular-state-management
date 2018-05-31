import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as _ from 'lodash';
import * as moment from 'moment';

import { Project } from '../../../shared/model/project';
import { TimeEntry } from '../../../shared/model/time-entry';
import { User } from '../../../shared/model/user';
import { WeekInfo } from '../../../shared/model/week-info.model';
import * as fromRoot from '../../reducers';
import { ProjectViewModel } from '../view-models/project.vm';
import * as fromDates from './dates';
import * as fromProjects from './projects';

export interface ProjectsState {
  dates: fromDates.State;
  projects: fromProjects.State;
}

export interface State extends fromRoot.State {
  projects: ProjectsState;
}

export const reducers = {
  dates: fromDates.reducer,
  projects: fromProjects.reducer
}

export const getProjectsState = createFeatureSelector<ProjectsState>('projects');

/* Dates Selectors */

export const getDatesState = createSelector(
  getProjectsState,
  state => state.dates
)

export const getSelectedWeekInfo = createSelector(
  getDatesState,
  fromDates.getSelectedWeekInfo
);

/* Projects Selectors */

export const getProjectEntitiesState = createSelector(
  getProjectsState,
  state => state.projects
);

export const getProjects = createSelector(
  getProjectEntitiesState,
  fromProjects.getProjects
);

export const getProjectsUsers = createSelector(
  getProjectEntitiesState,
  fromProjects.getProjectsUsers
);

export const getTimeEntries = createSelector(
  getProjectEntitiesState,
  fromProjects.getTimeEntries
);

/* Combined Selectors */

const filterTimeEntriesForWeek = (timeEntries: TimeEntry[], weekInfo: WeekInfo) => {
  return _.filter(timeEntries, (timeEntry: TimeEntry) => {
    const startDate = weekInfo.startDate.toDate();
    const endDate = weekInfo.endDate.toDate();
    const timeEntryDate = new Date(timeEntry.date);
    return timeEntryDate >= startDate && timeEntryDate <= endDate
  });
}

export const getFilteredTimeEntriesForWeek = createSelector(
  getTimeEntries,
  getSelectedWeekInfo,
  filterTimeEntriesForWeek
)

const filterTimeEntriesForProject = (timeEntries: TimeEntry[], project: Project) => {
  return _.filter(timeEntries, 
                  (timeEntry: TimeEntry) => timeEntry.projectId == project.id);
}

const mapTimeEntryToTimeEntryViewModel = (timeEntry: TimeEntry) => {
  return { 
    id: timeEntry.id,
    date: moment(new Date(timeEntry.date)),
    time: timeEntry.time
  }
}

const mapTimeEntriesToTimeEntryViewModels = (timeEntries: TimeEntry[]) => {
  return _.map(timeEntries, mapTimeEntryToTimeEntryViewModel);
}

const filterUsersForProject = (users: User[], project: Project) => {
  return _.filter(users, 
                  (user: User) => project.userIds.includes(user.id));
}

/* GetProjectViewModels Selector */

const mapProjectsToProjectViewModels = 
  (projects: Project[], 
   projectsUsers: User[], 
   weeklyTimeEntries: TimeEntry[]) => {

     return projects.map((project) => {

       const filteredProjectUsers: User[] = filterUsersForProject(projectsUsers, project);
       const filteredWeeklyTimeEntries: TimeEntry[] = filterTimeEntriesForProject(weeklyTimeEntries, project);

       return mapProjectToProjectViewModel(project, filteredProjectUsers, filteredWeeklyTimeEntries);

     })

  }

const getProjectId = (project: Project) => project.id;

const getProjectName = (project: Project) => project.name;

const getUserNames = (users: User[]) => {
  return users.map(user => user.fullName);
}

const mapProjectToProjectViewModel = 
  (project: Project,
   projectUsers: User[],
   weeklyTimeEntries: TimeEntry[]) => {

    const projectViewModel: ProjectViewModel = {
      id: getProjectId(project),
      name: getProjectName(project),
      userNames: getUserNames(projectUsers),
      weeklyTimeEntries: mapTimeEntriesToTimeEntryViewModels(weeklyTimeEntries)
    }
    return projectViewModel;
  }

export const getProjectViewModels = createSelector(
  getProjects,
  getProjectsUsers,
  getFilteredTimeEntriesForWeek,
  mapProjectsToProjectViewModels
)