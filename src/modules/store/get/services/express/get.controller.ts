import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Store } from '../../../models/sequelize/interfaces';
import { GetResult } from '../../../../../helpers/interfaces';

export default (getStore: any): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stores: GetResult<Store> = await getStore(
        {
          name: req.query.name,
          status: req.query.status,
          page: req.query.page,
          limit: req.query.limit,
        },
        {
          order: req.query.order,
          sort: req.query.sort,
        }
      );

      return res.status(200).json(stores);
    } catch (err) {
      next(err);
    }
  };
};
