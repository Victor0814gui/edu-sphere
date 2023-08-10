import { Router } from "express";
import { is } from "../middlewares/is";

import { CreateUserAccountController } from "../controllers/create-user-controller-account"
import { CreateRoleController } from "../controllers/create-role-controller";
import { ListPermissionsController } from "../controllers/list-permissions-controller";
import { ListRolesController } from "../controllers/list-roles-controller";
import { CreatePermissionController } from "../controllers/create-permission-controller";
import { DeleteUserAccountController } from "../controllers/delete-user-controller-account";
import { ListCustomersController } from "../controllers/list-customers-controller";
import { UpdateRoleController } from "../controllers/update-role-controller";
import { AuthenticationCustomerController } from "../controllers/authenticate-user-account";
import { userBusinessMiddleware } from "../middlewares/business-middleware";


const createUserAccountController = new CreateUserAccountController();
const createRoleController = new CreateRoleController();
const createPermissionController = new CreatePermissionController();
const listRolesController = new ListRolesController();
const listPermissionsController = new ListPermissionsController();
const deleteUserAccountController = new DeleteUserAccountController();
const listCustomersController = new ListCustomersController();
const updateRoleController = new UpdateRoleController();
const authenticationCustomerController = new AuthenticationCustomerController();
const UserRoutes = Router();


UserRoutes.post(
  "/customer/create",
  createUserAccountController.handler
);

UserRoutes.post(
  "/create/role",
  createRoleController.handler,
);

UserRoutes.get(
  "/list/role",
  listRolesController.handler
);

UserRoutes.get(
  "/list/permission",
  listPermissionsController.handler
);

UserRoutes.post(
  "/create/permission",
  createPermissionController.handler
);

UserRoutes.delete(
  "/delete/customer",
  deleteUserAccountController.handler
);

UserRoutes.get(
  "/list/customers",
  listCustomersController.handler
);

UserRoutes.put(
  "/update/role",
  updateRoleController.handler
);

UserRoutes.post(
  "/customer/signin",
  authenticationCustomerController.handler
)

UserRoutes.use("/", userBusinessMiddleware)


export { UserRoutes }