import { Optional } from 'sequelize';
import { StoreAttributes } from './store_attributes.interface';

type Store = Optional<StoreAttributes, 'id'>

export default Store;
