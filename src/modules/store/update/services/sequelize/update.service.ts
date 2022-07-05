import { UniqueConstraintError } from 'sequelize';
import {
  NotFoundException,
  BadRequestException,
} from '../../../../../exceptions';
import { Store } from '../../../models/sequelize/interfaces';
import StoreModel from '../../../models/sequelize/store.model';

export default async (id: number, body: Store): Promise<void> => {
  if (isNaN(id)) throw new BadRequestException('id invalid');

  try {
    const store: [number] = await StoreModel.update(body, {
      where: { id },
    });

    if (store[0] < 1) throw new NotFoundException('store not found');
  } catch (err) {
    if (err instanceof UniqueConstraintError)
      throw new BadRequestException('store already exists');

    throw err;
  }
};
