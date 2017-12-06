import { Application, Request, Response } from 'express';
import { dbUsers, dbProjects, dbTimeEntries } from '../db-data';
import * as _ from 'lodash';
import { User } from '../../shared/model/user';
import { Project } from '../../shared/model/project';
import { TimeEntry } from '../../shared/model/time-entry';
import { UserProjectsDetails } from '../../shared/model/user-projects-details';

export function apiGetUserProjectsWithTimeEntries(app: Application) {
  app.route('/api/projects').get((req: Request, res: Response) => {
    const userId = 1;

    // Get the user info from the db
    const filteredUsers: User[] = _.filter(dbUsers, user => user.id == userId);
    if (filteredUsers.length !== 1) {
      throw new Error(`Error while finding user with id ${userId}`);
    }
    const user: User = filteredUsers[0];

    // Get the projects info associated with the user from the db
    const projects: Project[] = _.filter(dbProjects, project => project.userIds.includes(userId));

    // Get the time entries on the projects with this user from the db
    let timeEntries: TimeEntry[] = [];
    projects.forEach(project => {
      const projectTimeEntries: TimeEntry[] = _.filter(dbTimeEntries, timeEntry => timeEntry.projectId == project.id && timeEntry.userId == user.id);

      timeEntries = timeEntries.concat(projectTimeEntries);
    });

    const response: UserProjectsDetails = {
      user,
      projects,
      timeEntries
    }

    res.status(200).json(response);
  });
}