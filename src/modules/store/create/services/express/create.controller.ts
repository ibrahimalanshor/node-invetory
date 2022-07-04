import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Store } from '../../../models/sequelize/interfaces';

export default (createStore: any): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const store: Store = await createStore(req.body);

      return res.status(201).json(store);
    } catch (err) {
      next(err);
    }
  };
};
