import app from './app';
const port: number = 3000;

app.listen(port, () => {
  console.log(`the server is running port${port} ...`);
});
