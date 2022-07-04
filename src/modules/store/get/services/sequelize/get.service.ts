import { Op } from 'sequelize';
import { GetQuery, GetOrder } from '../../interfaces';
import { GetResult } from '../../../../../helpers/interfaces';
import { Store } from '../../../models/sequelize/interfaces';
import StoreModel from '../../../models/sequelize/store.model';
import { paginate, order as sortOrder } from '../../../../../helpers';

export default async (
  query?: GetQuery,
  order?: GetOrder
): Promise<GetResult<Store>> => {
  return await StoreModel.findAndCountAll({
    order: [...(order ? [sortOrder(order.sort, order.order)] : [])],
    where: {
      ...(query?.name
        ? {
            name: {
              [Op.substring]: query.name,
            },
          }
        : {}),
      ...(query?.status
        ? { status: query.status.toString().toLowerCase() !== 'false' }
        : {}),
    },
    ...paginate(query?.page ?? 1, query?.limit ?? 10),
  });
};
