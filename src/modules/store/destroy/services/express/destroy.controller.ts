import { Request, Response, NextFunction, RequestHandler } from 'express';

export default (destroyStore: any): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await destroyStore(req.params.id);

      return res.status(200).json({ message: 'store deleted' });
    } catch (err) {
      next(err);
    }
  };
};
