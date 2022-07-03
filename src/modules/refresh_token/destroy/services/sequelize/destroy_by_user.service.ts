import RefreshTokenModel from '../../../models/sequelize/refresh_token.model';

export default async (userId: number): Promise<void> => {
  await RefreshTokenModel.destroy({ where: { userId } });
};
