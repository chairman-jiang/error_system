import app from './instance';
import bodyParser from 'body-parser';
import cors from 'cors';

app.use(cors());
app.use(bodyParser.json())

export default app;
