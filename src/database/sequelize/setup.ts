import { Sequelize } from 'sequelize-typescript';
import { SequelizeConfig } from '../../../config/interfaces';
import { SetupOptions } from './interfaces';

export default async (config: SequelizeConfig, options: SetupOptions) => {
  const instance: Sequelize = new Sequelize({
    ...config,
    logging: false,
    models: options.models,
  });

  await instance.authenticate();

  if (options.sync) {
    await instance.sync({ force: true });
  }

  return instance;
};
