import { Request, Response, NextFunction, RequestHandler } from 'express';
import { BadRequestException } from '../../../../../../exceptions';

export default (): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.user?.role === 'admin') {
        if (
          req.query.store != req.user?.store ||
          req.query.role !== 'operator'
        ) {
          throw new BadRequestException('you is not allowed');
        }
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};
