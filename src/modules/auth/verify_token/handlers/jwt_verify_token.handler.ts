import { JwtUserPayload } from '../../interfaces';
import { verifyToken } from '../services/jwt';

export default (key: string) => {
  return async (token: string): Promise<any> => {
    return await verifyToken(token, key);
  };
};
