import express, { Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { ApplicationConfig } from '../../../config/interfaces';
import { SetupOptions } from './interfaces';
import setRoute from './set_route';
import setConfig from './set_config';
import setMiddleware from './set_middleware';

export default (
  appConfig: ApplicationConfig,
  opt: SetupOptions
): Application => {
  const app: Application = express();

  setConfig(app, appConfig);
  setMiddleware(app, [
    ...(opt.env === 'development' ? [morgan('tiny')] : []),
    helmet(),
  ]);
  setRoute(app, opt.routes);

  return app;
};
