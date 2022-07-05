import {
  NotFoundException,
  BadRequestException,
} from '../../../../../exceptions';
import StoreModel from '../../../models/sequelize/store.model';

export default async (id: number, status: boolean): Promise<void> => {
  if (isNaN(id)) throw new BadRequestException('id invalid');

  const [updated] = await StoreModel.update(
    { status },
    {
      where: { id },
    }
  );

  if (updated < 1) throw new NotFoundException('store not found');
};
