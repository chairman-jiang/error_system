import mysql from 'mysql';
import { mysqlConfig } from '../config/mysql';

/*
  这是一个连接池
  连接池数量 runtime 最大为5
*/
const pool = mysql.createPool(mysqlConfig);

/**
 *
 *  connection.connect((err: any) => {
      console.log(err, 'err');
    })
 *  
 */

// export const queryConversionPromise = (sql: string) => {
//   const connection = mysql.createConnection(mysqlConfig);
//   return new Promise((resolve, reject) => {
//     // 隐式连接
//     connection.query(sql, (error, results, fields) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     });
//     // 不会立即终止, 这个destroy API会立即终止
//     connection.end();
//   });
// };

/** 
 * @param sql 
 */ 
export const queryConversionPromise = (sql: string) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      connection.query(sql, function (error, results, fields) {
        // 完成连接, 释放
        connection.release();
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      })
    })
  })
}
