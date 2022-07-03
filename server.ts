import 'reflect-metadata';

import config from './config';
import {
  setup as setupExpress,
  listen as listenExpress,
} from './src/app/express';
import { ExpressRoutes as routes } from './src/modules/routes';
import { SequelizeModels as models } from './src/modules/models';
import { setup as setupSequelize } from './src/database/sequelize';

async function start() {
  try {
    await setupSequelize(config.sequelize, {
      sync: config.env === 'development',
      models,
    });

    listenExpress(
      setupExpress(config.app, {
        env: config.env,
        routes,
      })
    );
  } catch (err) {
    console.error(err);
  }
}

start();
