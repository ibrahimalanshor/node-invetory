import HttpException from './http.exception';

export default class ValidationException extends HttpException {
  constructor(message = 'validation error', public errors?: any) {
    super(422, message, errors);
  }
}
