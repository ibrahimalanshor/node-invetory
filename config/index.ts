if (process.env.NODE_ENV === 'development') require('dotenv/config');

export default {
  env: process.env.NODE_ENV || 'development',
  app: {
    port: process.env.PORT || process.env.APP_PORT || 4000,
    url: process.env.APP_URL || 'http://localhost:4000',
    key: process.env.APP_KEY || 'secret',
  },
  sequelize: {
    dialect: process.env.SEQUELIZE_DIALECT,
    host: process.env.SEQUELIZE_HOST,
    database: process.env.SEQUELIZE_DATABASE,
    username: process.env.SEQUELIZE_USERNAME,
    password: process.env.SEQUELIZE_PASSWORD,
  },
};
