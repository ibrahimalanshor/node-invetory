import jwt from 'jsonwebtoken';
import { AuthenticationException } from '../../../../../exceptions';

export default async (token: string, key: string): Promise<any> => {
  try {
    return await jwt.verify(token, key);
  } catch (err) {
    throw new AuthenticationException('authentication error', err);
  }
};
