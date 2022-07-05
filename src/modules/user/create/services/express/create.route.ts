import { Application } from 'express';
import { create as createUser } from '../sequelize';
import createController from './create.controller';
import {
  requireToken,
  requireRole,
} from '../../../../../app/express/middlewares';
import { jwtVerifyToken } from '../../../../auth/verify_token/handlers';

export default (app: Application) => {
  app.post(
    '/api/users',
    requireToken(jwtVerifyToken(app.get('secret'))),
    requireRole('owner'),
    createController(createUser)
  );
};
