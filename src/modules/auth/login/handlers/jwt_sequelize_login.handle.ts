import { UserCredential, JwtAuthResult } from '../../interfaces';
import { LoginHandler, JwtLoginHandler } from '../interfaces';
import { checkCredential } from '../services/sequelize';
import { generateAuthToken } from '../services/jwt';
import { User } from '../../../user/models/sequelize/interfaces';
import { findByUsername as findUserByUsername } from '../../../user/find/services/sequelize';
import { create as createRefreshToken } from '../../../refresh_token/create/services/sequelize';
import { HttpException, AuthenticationException } from '../../../../exceptions';

export default (key: string): LoginHandler => {
  return async (credential: UserCredential): Promise<JwtAuthResult> => {
    try {
      const checkUser: any = checkCredential<User>(findUserByUsername);
      const user: User = await checkUser(credential);

      const saveToken: JwtLoginHandler = generateAuthToken(createRefreshToken);

      return await saveToken<User>(user, key);
    } catch (err) {
      if (err instanceof HttpException) {
        throw new AuthenticationException(err.message);
      } else {
        throw err;
      }
    }
  };
};
