import {
  Table,
  Model,
  Column,
  Default,
  DataType,
  ForeignKey,
  HasMany,
  BelongsTo,
  AllowNull,
} from 'sequelize-typescript';
import { StoreAttributes, Store } from './interfaces';
import User from '../../../user/models/sequelize/user.model';
import Setting from '../../../setting/models/sequelize/setting.model';

@Table({
  tableName: 'stores',
  modelName: 'Store',
  timestamps: true,
})
export default class StoreModel extends Model<StoreAttributes, Store> {
  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  address: string;

  @AllowNull(false)
  @Column(DataType.STRING(15))
  phone: string;

  @AllowNull(false)
  @Default(true)
  @Column(DataType.BOOLEAN)
  status: boolean;

  @AllowNull(false)
  @ForeignKey(() => Setting)
  @Column
  settingId: number;

  @BelongsTo(() => Setting)
  setting: Setting;

  @HasMany(() => User)
  user: User;
}
