import { User } from '../../../../user/models/sequelize/interfaces';

export default interface RefreshTokenAttributes {
  id: number;
  token: string;
  expireAt: Date;
  user: User;
  userId: number;
}
