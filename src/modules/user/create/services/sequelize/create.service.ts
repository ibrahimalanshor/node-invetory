import { User } from '../../../models/sequelize/interfaces';
import UserModel from '../../../models/sequelize/user.model';

export default async (user: User): Promise<User> => {
  return await UserModel.create(user);
};
