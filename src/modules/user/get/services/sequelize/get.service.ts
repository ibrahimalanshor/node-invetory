import { Op } from 'sequelize';
import { GetQuery, GetOrder } from '../../interfaces';
import { GetResult } from '../../../../../helpers/interfaces';
import { User } from '../../../models/sequelize/interfaces';
import UserModel from '../../../models/sequelize/user.model';
import { paginate, order as sortOrder } from '../../../../../helpers';

export default async (
  query?: GetQuery,
  order?: GetOrder
): Promise<GetResult<User>> => {
  return await UserModel.findAndCountAll({
    order: [...(order ? [sortOrder(order.sort, order.order)] : [])],
    where: {
      ...(query?.name ? { name: { [Op.substring]: query.name } } : {}),
      ...(query?.role ? { role: query.role } : {}),
      ...(query?.store ? { storeId: query.store } : {}),
    },
    ...paginate(query?.page ?? 1, query?.limit ?? 10),
  });
};
