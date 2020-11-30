import mysql from 'mysql';
import { mysqlConfig } from '../config/mysql';

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err: any) => {
  console.log(err, 'err');
})

export default connection;
