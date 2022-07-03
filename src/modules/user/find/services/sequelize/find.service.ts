import { User } from '../../../models/sequelize/interfaces';
import UserModel from '../../../models/sequelize/user.model';
import { NotFoundException } from '../../../../../exceptions';

export default async (id: number): Promise<User> => {
  const user: User | null = await UserModel.findByPk(id);

  if (!user) throw new NotFoundException('user not found');

  return user;
};
