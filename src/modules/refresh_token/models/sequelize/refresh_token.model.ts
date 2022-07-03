import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  AllowNull,
} from 'sequelize-typescript';
import { RefreshTokenAttributes, RefreshToken } from './interfaces';
import User from '../../../user/models/sequelize/user.model';

@Table({
  tableName: 'refresh_tokens',
  modelName: 'RefreshToken',
})
export default class RefreshTokenModel extends Model<
  RefreshTokenAttributes,
  RefreshToken
> {
  @AllowNull(false)
  @Column(DataType.STRING)
  token: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  expireAt: Date;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
