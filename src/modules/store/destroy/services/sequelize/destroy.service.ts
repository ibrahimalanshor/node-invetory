import {
  BadRequestException,
  NotFoundException,
} from '../../../../../exceptions';
import StoreModel from '../../../models/sequelize/store.model';

export default async (id: number): Promise<void> => {
  if (isNaN(id)) throw new BadRequestException('id invalid');

  const count = await StoreModel.destroy({ where: { id } });

  if (count < 1) throw new NotFoundException('store not found');
};
