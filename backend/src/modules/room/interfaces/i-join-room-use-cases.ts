import { Room } from "@/src/shared/application/entities/room";
import { Socket } from "socket.io";



declare namespace IJoinRoomUseCase { };


namespace IJoinRoomUseCase {
  export type Params = {
    roomId: string;
    customerId: string;
  };
}

namespace IJoinRoomUseCase {
  export type Response = Promise<Room>;
}

namespace IJoinRoomUseCase {
  export type Implementation = {
    execute: (params: IJoinRoomUseCase.Params)
      => IJoinRoomUseCase.Response;
  };
}

export { IJoinRoomUseCase };