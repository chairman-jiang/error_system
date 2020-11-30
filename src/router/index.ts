import app from '../app';
import * as controller from '../controller';

app.get('/user', controller.findUserAll);
