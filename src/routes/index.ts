import { Router } from 'express';
import { AuthUserController } from '../controllers/AuthUserController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

import { CreateUserController } from '../controllers/CreateUserController';
import { ListUserController } from '../controllers/ListUserController';
import { DeleteUserController } from '../controllers/DeleteUserController';
import { FindUserController } from '../controllers/FindUserController';
import { UpdateUserController } from '../controllers/UpdateUserController';
import { UpdateUserPrivilegesController } from '../controllers/UpdateUserPrivilegesController';
import { CreatePrizeController } from '../controllers/CreatePrizeController';
import { CreateImagesController } from '../controllers/CreateImagesController';

const routes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const authUserController = new AuthUserController();
const deleteUserController = new DeleteUserController();
const findUserController = new FindUserController();
const updateUserController = new UpdateUserController();
const updateUserPrivilegesController = new UpdateUserPrivilegesController()
const createPrizeController = new CreatePrizeController()
const createImagesController = new CreateImagesController()

// Users Routes
routes.post('/authenticate', authUserController.handle);
routes.post('/users', createUserController.handle);
routes.get('/users', ensureAuthenticated, ensureAdmin, listUserController.handle);
routes.get("/users/:user_id", ensureAuthenticated, ensureAdmin, findUserController.handle)
routes.delete("/users/:user_id", ensureAuthenticated, ensureAdmin, deleteUserController.handle)
routes.put("/users", ensureAuthenticated, updateUserController.handle)

// Prizes Routes
routes.post('/prizes', ensureAuthenticated, ensureAdmin, createPrizeController.handle);
routes.post("/prizes/images", ensureAuthenticated, ensureAdmin, createImagesController.handle)

// Admin Routes
routes.put("/admin/privileges", ensureAuthenticated, ensureAdmin, updateUserPrivilegesController.handle)

export { routes };
