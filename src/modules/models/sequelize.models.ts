import StoreModel from '../store/models/sequelize/store.model';
import UserModel from '../user/models/sequelize/user.model';
import SettingModel from '../setting/models/sequelize/setting.model';
import RefreshTokenModel from '../refresh_token/models/sequelize/refresh_token.model';

export default [SettingModel, StoreModel, UserModel, RefreshTokenModel];
