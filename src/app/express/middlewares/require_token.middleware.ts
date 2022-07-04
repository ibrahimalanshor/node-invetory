import { Request, Response, NextFunction, RequestHandler } from 'express';
import { AuthenticationException } from '../../../exceptions';

export default (handler: any): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.headers.authorization)
        throw new AuthenticationException('token required');

      const user: any = await handler(req.headers.authorization);

      req.user = user;

      next();
    } catch (err) {
      next(err);
    }
  };
};
