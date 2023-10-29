import { container } from "tsyringe";
import { CreateRoomRepository } from "../../repository/implementation/create-room-repository";
import { ICreateRoomRepository } from "../../repository/i-create-room-repository";
import { DeleteRoomRepository } from "../../repository/implementation/delete-room-repository";
import { IDeleteRoomRepository } from "../../repository/i-delete-room-repository";
import { UpdateRoomRepository } from "../../repository/implementation/update-room-repository";
import { IUpdateRoomRepository } from "../../repository/i-update-room-repository";
import { ListRoomsRepository } from "../../repository/implementation/list-rooms-repository";
import { IListRoomsRepository } from "../../repository/i-list-room-repository";
import { ICreateMessageRepository } from "../../repository/i-create-message-repository";
import { CreateMessageRepository } from "../../repository/implementation/create-message-repository";


container.registerSingleton<ICreateRoomRepository.Implementation>(
  'CreateRoomRepository',
  CreateRoomRepository
);

container.registerSingleton<IDeleteRoomRepository.Implementation>(
  'DeleteRoomRepository',
  DeleteRoomRepository
);

container.registerSingleton<IUpdateRoomRepository.Implementation>(
  "UpdateRoomRepository",
  UpdateRoomRepository,
);

container.registerSingleton<IListRoomsRepository.Implementation>(
  "ListRoomsRepository",
  ListRoomsRepository,
);

container.registerSingleton<ICreateMessageRepository.Implementation>(
  "CreateMessageRepository",
  CreateMessageRepository,
)