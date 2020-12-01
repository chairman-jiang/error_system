import mysql from 'mysql';
import { mysqlConfig } from '../config/mysql';

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err: any) => {
  console.log(err, 'err');
})

export const queryConversionPromise = (sql: string) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export default {
  connection
}
