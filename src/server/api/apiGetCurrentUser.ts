import { Application, Request, Response } from "express";
import { getUser } from "../selectors/getUser";
import { User } from "../../shared/model/user";

export function apiGetCurrentUser(app: Application) {
  app.route('/api/current-user').get((req: Request, res: Response) => {
    const userId = parseInt(<string>req.headers['userid']);

    const response: User = getUser(userId);
    res.status(200).json(response);
  });
}