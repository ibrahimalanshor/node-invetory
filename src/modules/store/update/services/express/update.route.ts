import { Application } from 'express';
import { update as updateStore } from '../sequelize';
import updateController from './update.controller';
import { UpdateRequest } from '../../requests';
import {
  bodyValidator,
  requireToken,
  requireRole,
} from '../../../../../app/express/middlewares';
import { jwtVerifyToken } from '../../../../auth/verify_token/handlers';

export default (app: Application) => {
  app.put(
    '/api/stores/:id',
    requireToken(jwtVerifyToken(app.get('secret'))),
    requireRole('owner'),
    bodyValidator(UpdateRequest),
    updateController(updateStore)
  );
};
