import { Application } from 'express';
import { destroy as destroyStore } from '../sequelize';
import destroyController from './destroy.controller';
import {
  requireToken,
  requireRole,
} from '../../../../../app/express/middlewares';
import { jwtVerifyToken } from '../../../../auth/verify_token/handlers';

export default (app: Application) => {
  app.delete(
    '/api/stores/:id',
    requireToken(jwtVerifyToken(app.get('secret'))),
    requireRole('owner'),
    destroyController(destroyStore)
  );
};
