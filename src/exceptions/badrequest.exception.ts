import HttpException from './http.exception';

export default class BadRequestException extends HttpException {
  constructor(message = 'bad request', public errors?: any) {
    super(400, message, errors);
  }
}
