import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Store } from '../../../models/sequelize/interfaces';

export default (findStore: any): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: Store = await findStore(req.params.id, {
        withSetting: true,
      });

      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };
};
