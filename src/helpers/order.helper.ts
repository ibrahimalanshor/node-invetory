import { Order } from './interfaces';

export default (sort = 'id', order = 'DESC'): Order => {
  return [sort, order];
};
