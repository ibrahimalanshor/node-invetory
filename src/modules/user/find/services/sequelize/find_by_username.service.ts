import { User } from '../../../models/sequelize/interfaces';
import UserModel from '../../../models/sequelize/user.model';
import { NotFoundException } from '../../../../../exceptions';

export default async (username: string): Promise<User> => {
  const user: User | null = await UserModel.findOne({
    where: { username },
  });

  if (!user) throw new NotFoundException('user not found');

  return user;
};
