import { Room } from "@/src/shared/application/entities/room";




declare namespace IDisconnectMultipleRoomsUseCase { };


namespace IDisconnectMultipleRoomsUseCase {
  export type Params = string[];
}

namespace IDisconnectMultipleRoomsUseCase {
  export type Response = Promise<Room[]>;
}

namespace IDisconnectMultipleRoomsUseCase {
  export type Implementation = {
    execute: (params: IDisconnectMultipleRoomsUseCase.Params)
      => IDisconnectMultipleRoomsUseCase.Response;
  };
}

export { IDisconnectMultipleRoomsUseCase };