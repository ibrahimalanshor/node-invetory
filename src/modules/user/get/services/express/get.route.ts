import { Application } from 'express';
import { get as getUser } from '../sequelize';
import getController from './get.controller';
import {
  requireToken,
  requireRole,
} from '../../../../../app/express/middlewares';
import { jwtVerifyToken } from '../../../../auth/verify_token/handlers';
import { verifyAdminAccess } from './middlewares';

export default (app: Application) => {
  app.get(
    '/api/users',
    requireToken(jwtVerifyToken(app.get('secret'))),
    requireRole(['owner', 'admin']),
    verifyAdminAccess(),
    getController(getUser)
  );
};
