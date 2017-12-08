import { User } from "../../shared/model/user";
import * as _ from 'lodash';
import { dbUsers } from "../db-data";

export function getUser(userId): User {
  const filteredUsers: User[] = _.filter(dbUsers, user => user.id == userId);
  if (filteredUsers.length !== 1) {
    throw new Error(`Error while finding user with id ${userId}`);
  }
  return filteredUsers[0];
}