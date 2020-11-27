import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.listen(port, () => {
  console.log(`the server is running port ${port} ...`);
});

