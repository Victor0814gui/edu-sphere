import { Router } from "express";
import { container } from "tsyringe";

import { CreateCustomerAccountController } from "../controllers/create-customer-controller-account"
import { CreateRoleController } from "../controllers/create-role-controller";
import { ListPermissionsController } from "../controllers/list-permissions-controller";
import { ListRolesController } from "../controllers/list-roles-controller";
import { CreatePermissionController } from "../controllers/create-permission-controller";
import { DeleteUserAccountController } from "../controllers/delete-customer-controller-account";
import { ListCustomersController } from "../controllers/list-customers-controller";
import { UpdateRoleController } from "../controllers/update-role-controller";
import { AuthenticationCustomerAccountController } from "../controllers/authenticate-customer-account-controller";
import { customerBusinessMiddleware } from "../middlewares/business-middleware";
import { CreateProductController } from "../../../../purchases/infra/http/controller/create-product-controller";
import { PurchaseProductToCustomerController } from "../controllers/purchase-product-to-customer-controller";
import { customerAuthenticationCheck } from "../middlewares/customer-authentication-check";
import { rolesMiddleware } from "../middlewares/roles-middleware";
import { permissionsMiddleware } from "../middlewares/permissions-middleware";
import { gatewayMiddleware } from "../middlewares/gateway-middleware";
import { CustomerAuthorizationAccountController } from "../controllers/customer-authorization-account-controller";

const customerAuthorizationAccountController = container.resolve(CustomerAuthorizationAccountController)
const createCustomerAccountController = new CreateCustomerAccountController();
const createRoleController = new CreateRoleController();
const createPermissionController = new CreatePermissionController();
const listRolesController = new ListRolesController();
const listPermissionsController = new ListPermissionsController();
const deleteUserAccountController = new DeleteUserAccountController();
const listCustomersController = new ListCustomersController();
const updateRoleController = new UpdateRoleController();
const createProductController = container.resolve(CreateProductController);
const purchaseProductToCustomerController = container.resolve(PurchaseProductToCustomerController);
const authenticationCustomerAccountController = container.resolve(AuthenticationCustomerAccountController);
const userRoutes = Router();


userRoutes.post(
  "/signup",
  createCustomerAccountController.handler
);

userRoutes.post(
  "/create/role",
  // customerAuthenticationCheck,
  // rolesMiddleware("admin"),
  // permissionsMiddleware(["admin.create"]),
  createRoleController.handler,
);



userRoutes.delete(
  "/delete",
  // customerAuthenticationCheck,
  // rolesMiddleware("admin"),
  // permissionsMiddleware(["admin.delete"]),
  deleteUserAccountController.handler
);

userRoutes.get(
  "/list",
  // customerAuthenticationCheck,
  // rolesMiddleware("student"),
  // permissionsMiddleware(["student.list"]),
  listCustomersController.handler
);

userRoutes.get(
  "/list/role",
  // customerAuthenticationCheck,
  // rolesMiddleware("admin"),
  // permissionsMiddleware(["admin.list"]),
  listRolesController.handler
);

userRoutes.get(
  "/list/permission",
  // customerAuthenticationCheck,
  // rolesMiddleware("admin"),
  // permissionsMiddleware(["admin.list"]),
  listPermissionsController.handler
);

userRoutes.post(
  "/create/permission",
  // customerAuthenticationCheck,
  // rolesMiddleware("admin"),
  // permissionsMiddleware(["admin.create"]),
  createPermissionController.handler
);

userRoutes.put(
  "/update/role",
  // customerAuthenticationCheck,
  // rolesMiddleware("admin"),
  // permissionsMiddleware(["admin.update"]),
  updateRoleController.handler
);

userRoutes.post(
  "/signin",
  authenticationCustomerAccountController.handler
);

userRoutes.post(
  "/subscription/create",
  customerAuthenticationCheck,
  rolesMiddleware("student"),
  permissionsMiddleware(["student.create"]),
  createProductController.handler
);

userRoutes.post(
  "/purchase/product",
  customerAuthenticationCheck,
  rolesMiddleware("student"),
  permissionsMiddleware(["student.purchase"]),
  purchaseProductToCustomerController.handler,
);

userRoutes.post(
  "/purchase/subscription",
  customerAuthenticationCheck,
  purchaseProductToCustomerController.handler,
);

userRoutes.post(
  "/authorization",
  customerAuthorizationAccountController.handler
);


userRoutes.use(
  "/",
  customerBusinessMiddleware,
  gatewayMiddleware,
);



export { userRoutes };