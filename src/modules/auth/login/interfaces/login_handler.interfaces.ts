import { UserCredential, AuthResult } from '../interfaces';

type LoginHandler = (credential: UserCredential) => AuthResult;

export default LoginHandler;
