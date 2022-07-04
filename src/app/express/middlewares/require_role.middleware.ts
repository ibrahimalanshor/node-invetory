import { Request, Response, NextFunction, RequestHandler } from 'express';
import { AuthenticationException } from '../../../exceptions';

export default (role: string): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (role !== req.user?.role)
        throw new AuthenticationException('your role is not allowed');

      next();
    } catch (err) {
      next(err);
    }
  };
};
