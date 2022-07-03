import { Optional } from 'sequelize';
import { SettingAttributes } from './setting_attributes.interface';

type SettingInterface = Optional<SettingAttributes, 'id'>

export default SettingInterface;
