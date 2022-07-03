import { JwtAuthResult, JwtUserPayload } from '../../../interfaces';
import { JwtLoginHandler } from '../../interfaces';
import generateAccessToken from './generate_access_token.service';
import generateRefreshToken from './generate_refresh_token.service';

export default (saveRefreshToken: any): JwtLoginHandler => {
  return async (
    userPayload: JwtUserPayload,
    key: string
  ): Promise<JwtAuthResult> => {
    const accessToken: string = await generateAccessToken(userPayload, key);
    const refreshToken: string = await generateRefreshToken(userPayload, key);

    await saveRefreshToken({
      token: refreshToken,
      userId: userPayload.id,
      expireAt: new Date(Date.now() + 1000 * 86400 * 30),
    });

    return { accessToken, refreshToken };
  };
};
