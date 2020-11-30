import { Request, Response } from 'express';
import connection from '../db';

export const findErrorAll = (req: Request, res: Response) => {
  connection.query('SELECT * FROM error_item', (error, results, fields) => {
    res.json(results)
  })
};
