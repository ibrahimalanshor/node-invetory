import { Request, Response, NextFunction, RequestHandler } from 'express';
import { RefreshTokenHandler } from '../../interfaces';
import { AuthenticationException } from '../../../../../exceptions';

export default (refreshTokenHandler: RefreshTokenHandler): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const refreshToken: string = req.body.refreshToken;

      if (!req.body.refreshToken) {
        throw new AuthenticationException('refresh token required');
      }

      const accessToken: string = await refreshTokenHandler(refreshToken);

      return res.status(200).json({ accessToken });
    } catch (err) {
      next(err);
    }
  };
};
