import { JwtUserPayload } from '../../interfaces';
import { RefreshTokenHandler } from '../interfaces';
import { findByToken as findRefreshTokenByToken } from '../../../refresh_token/find/services/sequelize';
import { RefreshToken } from '../../../refresh_token/models/sequelize/interfaces';
import { User } from '../../../user/models/sequelize/interfaces';
import { find as findUser } from '../../../user/find/services/sequelize';
import { generateAccessToken } from '../../login/services/jwt';
import { HttpException, AuthenticationException } from '../../../../exceptions';
import { checkRefreshToken } from '../services';

export default (key: string): RefreshTokenHandler => {
  return async (token: string): Promise<string> => {
    try {
      const findRefreshToken: any = checkRefreshToken<RefreshToken>(
        findRefreshTokenByToken
      );
      const refreshToken: RefreshToken = await findRefreshToken(token);
      const user: User = await findUser(refreshToken.userId);

      const accessToken: string = await generateAccessToken(
        <JwtUserPayload>user,
        key
      );

      return accessToken;
    } catch (err) {
      if (err instanceof HttpException) {
        throw new AuthenticationException(err.message);
      } else {
        throw err;
      }
    }
  };
};
