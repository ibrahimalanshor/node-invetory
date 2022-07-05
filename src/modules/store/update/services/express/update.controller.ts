import { Request, Response, NextFunction, RequestHandler } from 'express';

export default (updateStore: any): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await updateStore(req.params.id, req.body);

      return res.status(200).json({ message: 'store updated' });
    } catch (err) {
      next(err);
    }
  };
};
