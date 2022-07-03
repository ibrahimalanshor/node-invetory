import HttpException from './http.exception';

export default class AuthenticationException extends HttpException {
  constructor(message = 'authentication error', public errors?: any) {
    super(401, message, errors);
  }
}
