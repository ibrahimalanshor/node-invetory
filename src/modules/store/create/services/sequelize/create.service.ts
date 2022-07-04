import { Store } from '../../../models/sequelize/interfaces';
import StoreModel from '../../../models/sequelize/store.model';
import { BadRequestException } from '../../../../../exceptions';
import { UniqueConstraintError } from 'sequelize';

export default async (store: Store): Promise<Store> => {
  try {
    return await StoreModel.create(store);
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      throw new BadRequestException('store already exists');
    }

    throw err;
  }
};
