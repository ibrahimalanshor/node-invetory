import { RefreshToken } from '../../../models/sequelize/interfaces';
import RefreshTokenModel from '../../../models/sequelize/refresh_token.model';
import { NotFoundException } from '../../../../../exceptions';

export default async (token: string): Promise<RefreshToken> => {
  const refreshToken: RefreshToken | null = await RefreshTokenModel.findOne({
    where: { token },
  });

  if (!refreshToken) throw new NotFoundException('refresh token not found');

  return refreshToken;
};
