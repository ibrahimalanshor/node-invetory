import { Application, RequestHandler } from 'express';

export default (app: Application, middlewares: RequestHandler[] = []) => {
  for (const middleware of middlewares) {
    app.use(middleware);
  }
};
