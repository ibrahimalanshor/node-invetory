import { Request, Response, NextFunction, RequestHandler } from 'express';
import { User } from '../../../models/sequelize/interfaces';

export default (createUser: any): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: User = await createUser(req.body);

      return res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };
};
