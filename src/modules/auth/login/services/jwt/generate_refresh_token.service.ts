import jwt from 'jsonwebtoken';
import { JwtUserPayload } from '../../../interfaces';

export default async (
  userPayload: JwtUserPayload,
  key: string
): Promise<string> => {
  const refreshToken: string = await jwt.sign(
    {
      user: userPayload.id,
    },
    key,
    {
      expiresIn: '30d',
    }
  );

  return refreshToken;
};
