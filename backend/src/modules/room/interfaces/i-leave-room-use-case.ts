import { Room } from "@/src/shared/application/entities/room";



declare namespace ILeaveRoomUseCase { };


namespace ILeaveRoomUseCase {
  export type Params = {
    customerId: string;
    roomId: string;
  };
  export type Response = Promise<Room | null>;
}

namespace ILeaveRoomUseCase {
  export type Implementation = {
    execute: (params: ILeaveRoomUseCase.Params)
      => ILeaveRoomUseCase.Response;
  };
}

export { ILeaveRoomUseCase };