import { Router } from "express";
import { CreateRoomContoller } from "../../controllers/create-room-controller";
import { DeleteRoomContoller } from "../../controllers/delete-room-controller";
import { UpdateRoomContoller } from "../../controllers/update-room-controller";
import { ListRoomsContoller } from "../../controllers/list-rooms-controller";


const RoomRoutes = Router();

const createRoomContoller = new CreateRoomContoller();
const deleteRoomContoller = new DeleteRoomContoller();
const updateRoomContoller = new UpdateRoomContoller();
const listRoomsContoller = new ListRoomsContoller();

RoomRoutes.get(
  "/list/room",
  listRoomsContoller.handler
)

RoomRoutes.post(
  "/list/room",
  listRoomsContoller.handler
)


export { RoomRoutes };