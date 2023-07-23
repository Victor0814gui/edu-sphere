import { Router } from "express";

import {
  CreateTeacherAccountController
} from "../controllers/create-teacher-account-controller"

import { CreateSuportAccountController } from "../controllers/create-suport-account-controller"
import { CreateStudentAccountController } from "../controllers/create-student-controller-account"
import { CreateAdminAccountController } from "../controllers/create-admin-account-controller"

const createTeacherAccountController = new CreateTeacherAccountController();
const createSuportAccountController = new CreateSuportAccountController();
const createStudentAccountController = new CreateStudentAccountController();
const createAdminAccountController = new CreateAdminAccountController();

const UserRoutes = Router();

UserRoutes.post("/create/teacher", createTeacherAccountController.handler);

UserRoutes.post("/create/student", createSuportAccountController.handler);

UserRoutes.post("/create/suport", createStudentAccountController.handler);

UserRoutes.post("/create/admin", createAdminAccountController.handler);



export { UserRoutes }