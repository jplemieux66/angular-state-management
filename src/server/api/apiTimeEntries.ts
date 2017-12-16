import { Application, Request, Response } from 'express';
import { addTimeEntry } from '../persistence/addTimeEntry';
import { patchTimeEntry } from '../persistence/patchTimeEntry';
import { deleteTimeEntry } from '../persistence/deleteTimeEntry';
import { TimeEntry } from '../../shared/model/time-entry';

export function apiTimeEntries(app: Application) {
  app.route('/api/time-entry').post((req: Request, res: Response) => {
    const { date, projectId, time } = req.body;
    const userId = parseInt(<string>req.headers['userid']);
    const newTimeEntry: TimeEntry = addTimeEntry(date, projectId, userId, time);
    res.status(200).json(newTimeEntry);
  });

  app.route('/api/time-entry/:id').patch((req: Request, res: Response) => {
    const { newTime } = req.body;
    const timeEntryId = req.params.id;
    const patchedTimeEntry = patchTimeEntry(timeEntryId, newTime);
    res.status(200).json(patchedTimeEntry);
  });

  app.route('/api/time-entry/:id').delete((req: Request, res: Response) => {
    const timeEntryId = req.params.id;
    const deletedTimeEntry = deleteTimeEntry(timeEntryId);
    res.status(200).json(deletedTimeEntry);
  });
}