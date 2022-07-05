import jwt from 'jsonwebtoken';
import { JwtUserPayload } from '../../../interfaces';

export default async (
  userPayload: JwtUserPayload,
  key: string
): Promise<string> => {
  return await jwt.sign(
    {
      id: userPayload.id,
      username: userPayload.username,
      role: userPayload.role,
      store: userPayload.storeId,
    },
    key,
    {
      expiresIn: '15m',
    }
  );
};
