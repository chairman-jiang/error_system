import { Request, Response } from 'express';
import connection from '../db';

export const findUserAll = (req: Request, res: Response) => {
  connection.query('SELECT * FROM error_item', (error, results, fields) => {
    console.log()
  })
};
