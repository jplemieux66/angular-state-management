import * as express from 'express';
import { Application } from 'express';
import { apiGetProjectsDetails } from './api/apiGetProjectsDetails';
import * as bodyParser from 'body-parser';
import { apiGetCurrentUser } from './api/apiGetCurrentUser';
import { apiTimeEntries } from './api/apiTimeEntries';

const app: Application = express();

app.use(bodyParser.json());

apiGetProjectsDetails(app);
apiGetCurrentUser(app);
apiTimeEntries(app);

app.listen(8091, () => {
  console.log('Server is now running on port 8091');
})