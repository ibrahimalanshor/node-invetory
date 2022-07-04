import { Store } from '../../../models/sequelize/interfaces';
import StoreModel from '../../../models/sequelize/store.model';

export default async (store: Store): Promise<Store> => {
  return await StoreModel.create(store);
};
