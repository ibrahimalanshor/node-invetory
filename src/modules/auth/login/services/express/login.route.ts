import { Application } from 'express';
import loginController from './login.controller';
import { jwtSequelizeLogin } from '../../handlers';
import { bodyValidator } from '../../../../../app/express/middlewares';
import { LoginRequest } from '../../requests';

export default (app: Application) => {
  app.post(
    '/api/auth/login',
    bodyValidator(LoginRequest),
    loginController(jwtSequelizeLogin(app.get('secret')))
  );
};
