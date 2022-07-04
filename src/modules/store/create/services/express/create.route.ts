import { Application } from 'express';
import {
  requireToken,
  requireRole,
  bodyValidator,
} from '../../../../../app/express/middlewares';
import { jwtVerifyToken } from '../../../../auth/verify_token/handlers';
import { create as createStore } from '../sequelize';
import createController from './create.controller';
import { CreateRequest } from '../../requests';

export default (app: Application) => {
  app.post(
    '/api/stores',
    requireToken(jwtVerifyToken(app.get('secret'))),
    requireRole('owner'),
    bodyValidator(CreateRequest),
    createController(createStore)
  );
};
