import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  AllowNull,
  Default,
} from 'sequelize-typescript';
import bcrypt from 'bcrypt';
import { UserAttributes, User } from './interfaces';
import Store from '../../../store/models/sequelize/store.model';

@Table({
  tableName: 'users',
  modelName: 'User',
  timestamps: true,
})
export default class UserModel extends Model<UserAttributes, User> {
  @AllowNull(false)
  @Column(DataType.STRING)
  username: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    set: function (value: string) {
      this.setDataValue('password', bcrypt.hashSync(value, 10));
    },
  })
  password: string;

  @AllowNull(false)
  @Column(DataType.STRING(15))
  phone: string;

  @AllowNull(false)
  @Default('operator')
  @Column(DataType.ENUM('owner', 'admin', 'operator'))
  role: string;

  @AllowNull(false)
  @ForeignKey(() => Store)
  @Column
  storeId: number;

  @BelongsTo(() => Store)
  store: Store;
}
