import { Application } from 'express';
import { updateStatus as updateStatusStore } from '../sequelize';
import updateStatusController from './update_status.controller';
import { UpdateStatusRequest } from '../../requests';
import {
  bodyValidator,
  requireToken,
  requireRole,
} from '../../../../../app/express/middlewares';
import { jwtVerifyToken } from '../../../../auth/verify_token/handlers';

export default (app: Application) => {
  app.patch(
    '/api/stores/:id/status',
    requireToken(jwtVerifyToken(app.get('secret'))),
    requireRole('owner'),
    bodyValidator(UpdateStatusRequest),
    updateStatusController(updateStatusStore)
  );
};
