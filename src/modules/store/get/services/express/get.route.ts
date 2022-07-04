import { Application } from 'express';
import { get as getStore } from '../sequelize';
import getController from './get.controller';
import {
  requireToken,
  requireRole,
} from '../../../../../app/express/middlewares';
import { jwtVerifyToken } from '../../../../auth/verify_token/handlers';

export default (app: Application) => {
  app.get(
    '/api/stores',
    requireToken(jwtVerifyToken(app.get('secret'))),
    requireRole('owner'),
    getController(getStore)
  );
};
