import { Application, Request, Response } from 'express';
import { ModuleRouter } from './interfaces';

export default (app: Application, routes: ModuleRouter[] = []): void => {
  app.get('/', (req: Request, res: Response) => res.json('server'));

  for (const useRoute of routes) {
    useRoute(app);
  }
};
