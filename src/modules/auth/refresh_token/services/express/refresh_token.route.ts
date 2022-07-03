import { Application } from 'express';
import refreshTokenController from './refresh_token.controller';
import { jwtSequelizeRefreshTokenHandle } from '../../handlers';

export default (app: Application) => {
  app.post(
    '/api/auth/refresh_token',
    refreshTokenController(jwtSequelizeRefreshTokenHandle(app.get('secret')))
  );
};
