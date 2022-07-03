import { Setting } from '../../../../setting/models/sequelize/interfaces';
import { User } from '../../../../user/models/sequelize/interfaces';

export default interface StoreAttributesInterface {
  id: number;
  name: string;
  address: string;
  phone: string;
  status: boolean;
  setting: Setting;
  user: User[];
}
