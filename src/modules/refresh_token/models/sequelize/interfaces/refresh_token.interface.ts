import { Optional } from 'sequelize';
import RefreshTokenAttributes from './refresh_token_attributes.interface';

type RefreshToken = Optional<RefreshTokenAttributes, 'id'>

export default RefreshToken;
