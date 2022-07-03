import express, { Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { ApplicationConfig } from '../../../config/interfaces';
import { SetupOptions } from './interfaces';
import setRoute from './set_route';
import setConfig from './set_config';
import setMiddleware from './set_middleware';
import setError from './set_error';

export default (
  appConfig: ApplicationConfig,
  opt: SetupOptions
): Application => {
  const app: Application = express();

  setConfig(app, appConfig);
  setMiddleware(app, [
    express.urlencoded({ extended: true }),
    express.json(),
    ...(opt.env === 'development' ? [morgan('tiny')] : []),
    helmet(),
  ]);
  setRoute(app, opt.routes);
  setError(app, opt.env === 'development');

  return app;
};
