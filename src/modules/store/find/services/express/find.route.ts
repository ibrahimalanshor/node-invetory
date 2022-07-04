import { Application } from 'express';
import { find as findStore } from '../sequelize';
import findController from './find.controller';
import {
  requireToken,
  requireRole,
} from '../../../../../app/express/middlewares';
import { jwtVerifyToken } from '../../../../auth/verify_token/handlers';

export default (app: Application) => {
  app.get(
    '/api/stores/:id',
    requireToken(jwtVerifyToken(app.get('secret'))),
    requireRole('owner'),
    findController(findStore)
  );
};
