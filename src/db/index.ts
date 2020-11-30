import mysql from 'mysql';

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'vepalceshi123456',
  database : 'chris'
});

connection.connect((err: any) => {
  console.log(err, 'err');
})

export default connection;
