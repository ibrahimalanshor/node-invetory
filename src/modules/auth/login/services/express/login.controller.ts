import { Request, Response, NextFunction, RequestHandler } from 'express';
import { LoginHandler } from '../../interfaces';
import { AuthResult } from '../../../interfaces';

export default (handleLogin: LoginHandler): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authResult: AuthResult = await handleLogin(req.body);

      return res.status(200).json(authResult);
    } catch (err) {
      next(err);
    }
  };
};
