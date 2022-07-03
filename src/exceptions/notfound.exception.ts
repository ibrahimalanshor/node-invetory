import HttpException from './http.exception';

export default class NotFoundException extends HttpException {
  constructor(message = 'not found', public errors?: any) {
    super(404, message, errors);
  }
}
