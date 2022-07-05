import { Request, Response, NextFunction, RequestHandler } from 'express';

export default (updateStatusStore: any): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await updateStatusStore(req.params.id, req.body.status);

      return res.status(200).json({ message: 'store updated' });
    } catch (err) {
      next(err);
    }
  };
};
