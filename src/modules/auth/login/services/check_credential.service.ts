import { UserCredential } from '../../interfaces';
import verifyPassword from './verify_password.service';
import { BadRequestException } from '../../../../exceptions';

export default <U extends { [key: string]: any }>(findUser: any): any => {
  return async (credential: UserCredential): Promise<U> => {
    const user: U = await findUser(credential.username);
    const match: boolean = await verifyPassword(
      user.password,
      credential.password
    );

    if (!match) {
      throw new BadRequestException('password incorrect');
    }

    return user;
  };
};
