import { Application } from 'express';
import { ApplicationConfig } from '../../../config/interfaces';

export default (app: Application, appConfig: ApplicationConfig): void => {
  app.set('port', appConfig.port);
};
