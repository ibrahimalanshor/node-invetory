import {
  Table,
  Model,
  Column,
  Default,
  DataType,
  HasOne,
  AllowNull,
} from 'sequelize-typescript';
import { SettingAttributes, Setting } from './interfaces';
import Store from '../../../store/models/sequelize/store.model';

@Table({
  tableName: 'settings',
  modelName: 'Setting',
  timestamps: true,
})
export default class SettingModel extends Model<SettingAttributes, Setting> {
  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  theme: string;

  @AllowNull(false)
  @Column(DataType.STRING(2))
  lang: string;

  @AllowNull(false)
  @Default(true)
  @Column(DataType.FLOAT)
  tax: number;

  @HasOne(() => Store)
  store: Store;
}
