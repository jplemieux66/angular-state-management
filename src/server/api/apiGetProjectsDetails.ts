import { Application, Request, Response } from 'express';
import { dbUsers, dbProjects, dbTimeEntries } from '../db-data';
import * as _ from 'lodash';
import { User } from '../../shared/model/user';
import { Project } from '../../shared/model/project';
import { TimeEntry } from '../../shared/model/time-entry';
import { ProjectsDetails } from '../../shared/model/user-projects-details';

export function apiGetProjectsDetails(app: Application) {
  app.route('/api/projects').get((req: Request, res: Response) => {
    const userId = parseInt(<string>req.headers['userid']);
    
    // Get the projects info associated with the user from the db
    const projects: Project[] = _.filter(dbProjects, project => project.userIds.includes(userId));

    // Get the time entries on the projects with this user from the db
    let timeEntries: TimeEntry[] = [];
    projects.forEach(project => {
      const projectTimeEntries: TimeEntry[] = _.filter(dbTimeEntries, timeEntry => timeEntry.projectId == project.id && timeEntry.userId == userId);

      timeEntries = timeEntries.concat(projectTimeEntries);
    });

    // Get the other users on projects
    const projectsUserIds: number[] = _.uniq(projects.map(project => project.userIds)
                                                   .reduce((a, b) => a.concat(b)));

    const projectsUsers: User[] = _.filter(dbUsers, user => projectsUserIds.includes(userId));

    const response: ProjectsDetails = {
      projects,
      timeEntries,
      projectsUsers
    }

    res.status(200).json(response);
  });
}