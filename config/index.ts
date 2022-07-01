if (process.env.NODE_ENV === 'develoment') require('dotenv');

export default {
  env: process.env.NODE_ENV || 'develoment',
  app: {
    port: process.env.PORT || process.env.APP_PORT || 4000,
    url: process.env.APP_URL || 'http://localhost:4000',
    key: process.env.APP_KEY || 'secret',
  },
};
