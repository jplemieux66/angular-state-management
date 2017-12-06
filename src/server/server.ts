import * as express from 'express';
import { Application } from 'express';
import { apiGetUserProjectsWithTimeEntries } from './api/apiGetUserProjectsWithTimeEntries';
import * as bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.json());

apiGetUserProjectsWithTimeEntries(app);

app.listen(8091, () => {
  console.log('Server is now running on port 8091');
})