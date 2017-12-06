import { User, UserType } from "../shared/model/user";
import { Project } from "../shared/model/project";
import { TimeEntry } from "../shared/model/time-entry";

export const dbUsers: {[key: number]: User} = {
  1: {
    id: 1,
    username: 'ablack',
    fullName: 'Aaron Black',
    type: UserType.Contributor
  },
  2: {
    id: 2,
    username: 'jsmith',
    fullName: 'John Smith',
    type: UserType.Contributor
  },
  3: {
    id: 3,
    username: 'mronson',
    fullName: 'Mark Ronson',
    type: UserType.Manager
  }
}

export const dbProjects: {[key: number]: Project} = {
  1: {
    id: 1,
    name: "Data Analytics Software",
    userIds: [1, 2, 3],
    timeEntryIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  2: {
    id: 2,
    name: "New Login Feature",
    userIds: [1, 3],
    timeEntryIds: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
  }
}

export const dbTimeEntries: {[key: number]: TimeEntry} = {
  1: {
    id: 1,
    date: new Date(2017, 11, 27),
    projectId: 1,
    userId: 1,
    time: 9
  },
  2: {
    id: 2,
    date: new Date(2017, 11, 28),
    projectId: 1,
    userId: 1,
    time: 7
  },
  3: {
    id: 3,
    date: new Date(2017, 11, 29),
    projectId: 1,
    userId: 1,
    time: 7.5
  },
  4: {
    id: 3,
    date: new Date(2017, 12, 1),
    projectId: 1,
    userId: 1,
    time: 5
  },
  5: {
    id: 5,
    date: new Date(2017, 11, 27),
    projectId: 1,
    userId: 2,
    time: 2
  },
  6: {
    id: 6,
    date: new Date(2017, 11, 29),
    projectId: 1,
    userId: 2,
    time: 3
  },
  7: {
    id: 7,
    date: new Date(2017, 11, 30),
    projectId: 1,
    userId: 2,
    time: 9
  },
  8: {
    id: 8,
    date: new Date(2017, 12, 1),
    projectId: 1,
    userId: 2,
    time: 8
  },
  9: {
    id: 9,
    date: new Date(2017, 11, 27),
    projectId: 1,
    userId: 3,
    time: 7.5
  },
  10: {
    id: 6,
    date: new Date(2017, 11, 28),
    projectId: 1,
    userId: 3,
    time: 7
  },
  11: {
    id: 7,
    date: new Date(2017, 11, 29),
    projectId: 1,
    userId: 3,
    time: 8
  },
  12: {
    id: 8,
    date: new Date(2017, 11, 30),
    projectId: 1,
    userId: 3,
    time: 7
  },
  13: {
    id: 13,
    date: new Date(2017, 11, 27),
    projectId: 2,
    userId: 1,
    time: 7.5
  },
  14: {
    id: 14,
    date: new Date(2017, 11, 28),
    projectId: 2,
    userId: 1,
    time: 7
  },
  15: {
    id: 15,
    date: new Date(2017, 11, 29),
    projectId: 2,
    userId: 1,
    time: 8
  },
  16: {
    id: 16,
    date: new Date(2017, 11, 30),
    projectId: 2,
    userId: 1,
    time: 7
  },
  17: {
    id: 17,
    date: new Date(2017, 12, 1),
    projectId: 2,
    userId: 1,
    time: 7
  },
  18: {
    id: 18,
    date: new Date(2017, 11, 27),
    projectId: 2,
    userId: 3,
    time: 3
  },
  19: {
    id: 19,
    date: new Date(2017, 11, 28),
    projectId: 2,
    userId: 3,
    time: 3
  },
  20: {
    id: 20,
    date: new Date(2017, 11, 29),
    projectId: 2,
    userId: 3,
    time: 3
  },
  21: {
    id: 21,
    date: new Date(2017, 11, 30),
    projectId: 2,
    userId: 3,
    time: 3
  },
  22: {
    id: 22,
    date: new Date(2017, 12, 1),
    projectId: 2,
    userId: 3,
    time: 3
  },
}