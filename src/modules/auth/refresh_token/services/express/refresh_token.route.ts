import { Application } from 'express';
import refreshTokenController from './refresh_token.controller';
import { jwtSequelizeRefreshToken } from '../../handlers';

export default (app: Application) => {
  app.post(
    '/api/auth/refresh_token',
    refreshTokenController(jwtSequelizeRefreshToken(app.get('secret')))
  );
};
