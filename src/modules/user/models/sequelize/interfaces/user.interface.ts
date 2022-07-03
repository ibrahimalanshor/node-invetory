import { Optional } from 'sequelize';
import { UserAttributes } from './user_attributes.interface';

type User = Optional<UserAttributes, 'id'>

export default User;
