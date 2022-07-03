import { Store } from '../../../../store/models/sequelize/interfaces';

export default interface SettingAttributesInterface {
  id: number;
  name: string;
  theme: string;
  lang: string;
  tax: float;
  store: Store;
}
