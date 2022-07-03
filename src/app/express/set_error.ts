import { Application, Request, Response, NextFunction } from 'express';
import { HttpException } from '../../exceptions';

export default (app: Application, debug = false): void => {
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HttpException) {
      return res.status(err.status).json({
        status: err.status,
        message: err.message,
        errors: err.errors,
      });
    }

    return res.status(500).json(debug ? err.message : 'server error');
  });
};
