import { Application } from 'express';

export default (app: Application, cb?: any): void => {
  const port: number | string = app.get('port');

  app.listen(port, () => {
    if (cb) {
      cb();
    } else {
      console.log(`server running at ${port}`);
    }
  });
};
