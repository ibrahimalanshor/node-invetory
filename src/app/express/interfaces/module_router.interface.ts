import { Application } from 'express';

type ModuleRoute = (router: Application) => void;

export default ModuleRoute;
