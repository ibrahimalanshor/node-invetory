import { Request, Response, NextFunction, RequestHandler } from 'express';
import { GetResult } from '../../../../../helpers/interfaces';
import { User } from '../../../models/sequelize/interfaces';

export default (getUser: any): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users: GetResult<User> = await getUser(
        {
          name: req.query.name,
          role: req.query.role,
          store: req.query.store,
          page: req.query.page,
          limit: req.query.limit,
        },
        {
          sort: req.query.sort,
          order: req.query.order,
        }
      );

      return res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  };
};
