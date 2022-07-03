export default class HttpException extends Error {
  constructor(
    public status: number = 500,
    message = 'server error',
    public errors?: any
  ) {
    super(message);

    this.status = status;
    this.errors = errors;
  }
}
