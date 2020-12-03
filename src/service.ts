import app from './app';
import './router'
const port: number = 3011;

app.listen(port, () => {
  console.log(`the server is running port ${port} ...`);
});
