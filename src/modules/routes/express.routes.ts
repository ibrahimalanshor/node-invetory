import AuthRoutes from '../auth/routes/express.routes';
import StoreRoutes from '../store/routes/express.routes';
import UserRoutes from '../user/routes/express.routes';

export default [...AuthRoutes, ...StoreRoutes, ...UserRoutes];
