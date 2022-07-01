import config from './config';
import {
  setup as setupExpress,
  listen as listenExpress,
} from './src/app/express';
import { Application } from 'express';
import { ExpressRoutes as routes } from './src/modules/routes';

const app: Application = setupExpress(config.app, {
  env: config.env,
  routes,
});

listenExpress(app);
