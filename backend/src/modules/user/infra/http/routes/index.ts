import { Router } from "express";

import {
  CreateTeacherAccountController
} from "../controllers/create-teacher-account-controller"

import { CreateSuportAccountController } from "../controllers/create-suport-account-controller"
import { CreateStudentAccountController } from "../controllers/create-student-controller-account"
import { CreateAdminAccountController } from "../controllers/create-admin-account-controller"
import { CreatePermissionController } from "../controllers/create-permission-controller";
import { CreateRoleController } from "../controllers/create-role-controller";
import { ListRoleController } from "../controllers/list-role-controller";
import { is } from "../middlewares/is";

const createTeacherAccountController = new CreateTeacherAccountController();
const createSuportAccountController = new CreateSuportAccountController();
const createStudentAccountController = new CreateStudentAccountController();
const createAdminAccountController = new CreateAdminAccountController();

const createRoleController = new CreateRoleController();
const createPermissionController = new CreatePermissionController();
const listRoleController = new ListRoleController();

const UserRoutes = Router();

UserRoutes.post(
  "/create/teacher",
  is(process.env.ROLE_ADMIN as string),
  createTeacherAccountController.handler
);

UserRoutes.post(
  "/create/student",
  is(process.env.ROLE_STUDENT as string),
  createStudentAccountController.handler
);

UserRoutes.post(
  "/create/suport",
  is(process.env.ROLE_ADMIN as string),
  createSuportAccountController.handler
);

UserRoutes.post(
  "/create/admin",
  is(process.env.ROLE_ADMIN as string),
  createAdminAccountController.handler
);

UserRoutes.post(
  "/create/role",
  is(process.env.ROLE_ADMIN as string),
  createRoleController.handler,
);
UserRoutes.get(
  "/list/role",
  is(process.env.ROLE_ADMIN as string),
  listRoleController.handler
);
UserRoutes.post(
  "/create/permission",
  is(process.env.ROLE_ADMIN as string),
  createPermissionController.handler
);


export { UserRoutes }