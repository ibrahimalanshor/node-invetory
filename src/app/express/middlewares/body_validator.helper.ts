import { Request, Response, NextFunction, RequestHandler } from 'express';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { ValidationException } from '../../../exceptions';

export default (schema: any): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: any = plainToClass(schema, req.body, {
        excludeExtraneousValues: true,
      });

      await validateOrReject(body, {
        stopAtFirstError: true,
        validationError: {
          target: false,
          value: false,
        },
      });

      req.body = body;

      next();
    } catch (err) {
      next(new ValidationException('', err));
    }
  };
};
