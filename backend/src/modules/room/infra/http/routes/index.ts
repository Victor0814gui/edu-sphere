import { Router } from "express";
import { container } from "tsyringe";
import { CreateRoomContoller } from "@room/infra/controllers/create-room-controller";
import { DeleteRoomContoller } from "@room/infra/controllers/delete-room-controller";
import { UpdateRoomContoller } from "@room/infra/controllers/update-room-controller";
import { ListRoomsContoller } from "@room/infra/controllers/list-rooms-controller";
import { roomBusinessMiddleware } from "../middleware/business-middleware";


const RoomRoutes = Router();

const createRoomContoller = container.resolve(CreateRoomContoller);
const deleteRoomContoller = container.resolve(DeleteRoomContoller);
const updateRoomContoller = container.resolve(UpdateRoomContoller);
const listRoomsContoller = container.resolve(ListRoomsContoller);

RoomRoutes.get(
  "/room/list",
  listRoomsContoller.handler
)

RoomRoutes.post(
  "/room/create",
  createRoomContoller.handler
)

RoomRoutes.put(
  "/room/update",
  updateRoomContoller.handler
)

RoomRoutes.delete(
  "/room/delete",
  deleteRoomContoller.handler
)

RoomRoutes.use("/room", roomBusinessMiddleware);


export { RoomRoutes };