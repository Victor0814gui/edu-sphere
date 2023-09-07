import { Router } from "express";
import { container } from "tsyringe";
import { is } from "../middlewares/is";

import { CreateCustomerAccountController } from "../controllers/create-customer-controller-account"
import { CreateRoleController } from "../controllers/create-role-controller";
import { ListPermissionsController } from "../controllers/list-permissions-controller";
import { ListRolesController } from "../controllers/list-roles-controller";
import { CreatePermissionController } from "../controllers/create-permission-controller";
import { DeleteUserAccountController } from "../controllers/delete-customer-controller-account";
import { ListCustomersController } from "../controllers/list-customers-controller";
import { UpdateRoleController } from "../controllers/update-role-controller";
import { AuthenticationCustomerController } from "../controllers/authenticate-user-account";
import { userBusinessMiddleware } from "../middlewares/business-middleware";
import { CreateProductController } from "../controllers/create-product-controller";
import { PurchaseProductToCustomerController } from "../controllers/purchase-product-to-customer-controller";
import { customerAuthenticationCheck } from "../middlewares/customer-authentication-check";


const createCustomerAccountController = new CreateCustomerAccountController();
const createRoleController = new CreateRoleController();
const createPermissionController = new CreatePermissionController();
const listRolesController = new ListRolesController();
const listPermissionsController = new ListPermissionsController();
const deleteUserAccountController = new DeleteUserAccountController();
const listCustomersController = new ListCustomersController();
const updateRoleController = new UpdateRoleController();
const authenticationCustomerController = new AuthenticationCustomerController();
const createProductController = container.resolve(CreateProductController);
const purchaseProductToCustomerController = container.resolve(PurchaseProductToCustomerController);
const userRoutes = Router();


userRoutes.post(
  "/customer/create",
  createCustomerAccountController.handler
);

userRoutes.post(
  "/create/role",
  createRoleController.handler,
);

userRoutes.get(
  "/list/role",
  listRolesController.handler
);

userRoutes.get(
  "/list/permission",
  listPermissionsController.handler
);

userRoutes.post(
  "/create/permission",
  createPermissionController.handler
);

userRoutes.delete(
  "/delete/customer",
  deleteUserAccountController.handler
);

userRoutes.get(
  "/list/customers",
  listCustomersController.handler
);

userRoutes.put(
  "/update/role",
  updateRoleController.handler
);

userRoutes.post(
  "/customer/signin",
  authenticationCustomerController.handler
);

userRoutes.post(
  "/subscription/create",
  createProductController.handler
);


userRoutes.use("/", userBusinessMiddleware);


userRoutes.use(
  "/purchase/product",
  customerAuthenticationCheck,
  purchaseProductToCustomerController.handler,
)


export { userRoutes };