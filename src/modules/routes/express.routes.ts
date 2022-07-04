import AuthRoutes from '../auth/routes/express.routes';
import StoreRoutes from '../store/routes/express.routes';

export default [...AuthRoutes, ...StoreRoutes];
