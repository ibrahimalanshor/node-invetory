import { AuthenticationException } from '../../../../exceptions';

export default <T extends { [key: string]: any }>(
  findRefreshToken: any
): any => {
  return async (token: string): Promise<T> => {
    const refreshToken: T = await findRefreshToken(token);

    if (Date.now() > new Date(refreshToken.expireAt).getTime()) {
      throw new AuthenticationException('refresh token expired');
    }

    return refreshToken;
  };
};
