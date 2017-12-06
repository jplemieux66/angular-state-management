export interface User {
  id: number;
  username: string;
  fullName: string;
  type: UserType;
}

export enum UserType {
  Manager,
  Contributor
}