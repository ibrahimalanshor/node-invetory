import RefreshTokenModel from '../../../models/sequelize/refresh_token.model';
import { RefreshToken } from '../../../models/sequelize/interfaces';
import { destroyByUser } from '../../../destroy/services/sequelize';

export default async (refreshToken: RefreshToken): Promise<RefreshToken> => {
  await destroyByUser(refreshToken.userId);

  return await RefreshTokenModel.create(refreshToken);
};
