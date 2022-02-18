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
import { UpdatePrizeController } from '../controllers/UpdatePrizeController';
import { DeletePrizeController } from '../controllers/DeletePrizeController';
import { ListPrizeController } from '../controllers/ListPrizeController';
import { ListImagesController } from '../controllers/ListImagesController';
import { DeleteImagesController } from '../controllers/DeleteImagesController';
import { UpdateImageOrderController } from '../controllers/UpdateImageOrderController';

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
const updatePrizeController = new UpdatePrizeController()
const deletePrizeController = new DeletePrizeController()
const listPrizeController = new ListPrizeController()
const listImagesController = new ListImagesController()
const deleteImagesController = new DeleteImagesController();
const updateImageOrderController = new UpdateImageOrderController()

// Users Routes
routes.post('/authenticate', authUserController.handle);
routes.post('/users', createUserController.handle);
routes.get('/users', ensureAuthenticated, ensureAdmin, listUserController.handle);
routes.get("/users/:user_id", ensureAuthenticated, ensureAdmin, findUserController.handle)
routes.delete("/users/:user_id", ensureAuthenticated, ensureAdmin, deleteUserController.handle)
routes.put("/users", ensureAuthenticated, updateUserController.handle)

// Addresses Routes


// Prizes Routes
routes.post('/prizes', ensureAuthenticated, ensureAdmin, createPrizeController.handle);
routes.put("/prizes/:prize_id", ensureAuthenticated, ensureAdmin, updatePrizeController.handle)
routes.delete("/prizes/:prize_id", ensureAuthenticated, ensureAdmin, deletePrizeController.handle)
routes.get("/prizes", listPrizeController.handle)

// Images Routes
routes.get("/prizes/:prize_id/images", listImagesController.handle)
routes.post("/prizes/images", ensureAuthenticated, ensureAdmin, createImagesController.handle)
routes.delete("/prizes/images/:image_id", ensureAuthenticated, ensureAdmin, deleteImagesController.handle)
routes.put("/prizes/images/:image_id", ensureAuthenticated, ensureAdmin, updateImageOrderController.handle)

// Schedule Routes


// Settings Routes


// Orders Routes


// Promotion Routes


// Winners Routes


// Purchase Routes


// Admin Routes
routes.put("/admin/privileges", ensureAuthenticated, ensureAdmin, updateUserPrivilegesController.handle)

export { routes };
