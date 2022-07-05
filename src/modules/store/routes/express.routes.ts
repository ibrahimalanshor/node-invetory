import GetRoute from '../get/services/express/get.route';
import CreateRoute from '../create/services/express/create.route';
import FindRoute from '../find/services/express/find.route';
import UpdateRoute from '../update/services/express/update.route';
import DestroyRoute from '../destroy/services/express/destroy.route';
import UpdateStatusRoute from '../update_status/services/express/update_status.route';

export default [
  GetRoute,
  CreateRoute,
  FindRoute,
  UpdateRoute,
  DestroyRoute,
  UpdateStatusRoute,
];
