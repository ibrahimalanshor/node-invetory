import { Store } from '../../../../store/models/sequelize/interfaces';

export default interface UserAttributesInterface {
  id: number;
  username: string;
  name: string;
  password: string;
  phone: string;
  role: string;
  store: Store;
}
