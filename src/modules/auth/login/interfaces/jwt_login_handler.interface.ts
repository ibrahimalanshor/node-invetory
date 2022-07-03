import { UserCredential, JwtAuthResult } from '../interfaces';

type JwtLoginHandler = (
  credential: UserCredential,
  key: string
) => JwtAuthResult;

export default JwtLoginHandler;
