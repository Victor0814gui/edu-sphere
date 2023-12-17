import { Router } from "express";
import { container } from "tsyringe";
import { CreateRoomController } from "@room/infra/http/controllers/create-room-controller";
import { DeleteRoomController } from "@room/infra/http/controllers/delete-room-controller";
import { UpdateRoomController } from "@room/infra/http/controllers/update-room-controller";
import { ListRoomsController } from "@room/infra/http/controllers/list-rooms-controller";
import { roomBusinessMiddleware } from "../middleware/business-middleware";
import { roomAuthenticationCheck } from "../middleware/room-authentication-check";
import { uploadFileMiddleware } from "../middleware/upload-files-middleware";
import { rolesMiddleware } from "../middleware/roles-middleware";
import { permissionsMiddleware } from "../middleware/permissions-middleware";
import { ManagerPermission, TeacherPermission } from "@room/interfaces/security/permissions";
import { Roles } from "@room/interfaces/security/roles";
import { SearchRoomController } from "../controllers/search-room-controller";


const roomRoutes = Router();

const createRoomController = container.resolve(CreateRoomController);
const deleteRoomController = container.resolve(DeleteRoomController);
const updateRoomController = container.resolve(UpdateRoomController);
const listRoomsController = container.resolve(ListRoomsController);
const searchRoomController = container.resolve(SearchRoomController);

roomRoutes.get(
  "/list",
  roomAuthenticationCheck,
  listRoomsController.handler
)

roomRoutes.post(
  "/create",
  roomAuthenticationCheck,
  rolesMiddleware(Roles.teacher),
  permissionsMiddleware([TeacherPermission.create]),
  uploadFileMiddleware,
  createRoomController.handler
)

roomRoutes.put(
  "/update",
  roomAuthenticationCheck,
  uploadFileMiddleware,
  rolesMiddleware(Roles.teacher),
  permissionsMiddleware([TeacherPermission.update]),
  updateRoomController.handler
)

roomRoutes.delete(
  "/delete",
  roomAuthenticationCheck,
  rolesMiddleware(Roles.manager),
  permissionsMiddleware([ManagerPermission.delete]),
  deleteRoomController.handler
)

roomRoutes.get(
  "/search",
  roomAuthenticationCheck,
  searchRoomController.handler,
)

roomRoutes.use("/", roomBusinessMiddleware);


export { roomRoutes };