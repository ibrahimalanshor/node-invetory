import { Store } from '../../../models/sequelize/interfaces';
import StoreModel from '../../../models/sequelize/store.model';
import { NotFoundException } from '../../../../../exceptions';
import Setting from '../../../../setting/models/sequelize/setting.model';
import { FindOptions } from '../../interfaces/';

export default async (id: number, options?: FindOptions): Promise<Store> => {
  const store: Store | null = await StoreModel.findByPk(id, {
    include: [...(options?.withSetting ? [Setting] : [])],
  });

  if (!store) throw new NotFoundException('store not found');

  return store;
};
