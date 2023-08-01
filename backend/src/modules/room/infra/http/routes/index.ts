import { Router } from "express";
import { container } from "tsyringe";
import { CreateRoomContoller } from "@room/infra/controllers/create-room-controller";
import { DeleteRoomContoller } from "@room/infra/controllers/delete-room-controller";
import { UpdateRoomContoller } from "@room/infra/controllers/update-room-controller";
import { ListRoomsContoller } from "@room/infra/controllers/list-rooms-controller";


const RoomRoutes = Router();

const createRoomContoller = container.resolve(CreateRoomContoller);
const deleteRoomContoller = container.resolve(DeleteRoomContoller);
const updateRoomContoller = container.resolve(UpdateRoomContoller);
const listRoomsContoller = container.resolve(ListRoomsContoller);

RoomRoutes.get(
  "/list/room",
  listRoomsContoller.handler
)

RoomRoutes.post(
  "/create/room",
  createRoomContoller.handler
)

RoomRoutes.put(
  "/update/room",
  updateRoomContoller.handler
)

RoomRoutes.delete(
  "/delete/room",
  deleteRoomContoller.handler
)


export { RoomRoutes };