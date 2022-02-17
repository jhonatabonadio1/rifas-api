import { Router } from 'express';

import { InitialController } from '../controllers/InitialController';

const routes = Router();

const initialController = new InitialController()

routes.get('/', initialController.handle);

export { routes };
