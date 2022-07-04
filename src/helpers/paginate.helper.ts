import { Paginate } from './interfaces';

export default (page = 1, limit = 10): Paginate => {
  return {
    offset: Math.max((page - 1) * limit, 0),
    limit: +limit,
  };
};
