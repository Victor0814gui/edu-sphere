import { Room } from "@/src/shared/application/entities/room";
import { Customer } from "@/src/shared/application/entities/user";



declare namespace ILeaveRoomRepository { };


namespace ILeaveRoomRepository {
  export namespace FindRoomById {
    export type Params = {
      roomId: string;
    };
    export type Response = Promise<Room | null>;
  }
}

namespace ILeaveRoomRepository {
  export namespace Leave {
    export type Params = {
      roomId: string;
      customerId: string;
    };
    export type Response = Promise<Room>;
  }
}

namespace ILeaveRoomRepository {
  export namespace FindCustomerById {
    export type Params = {
      customerId: string;
    };
    export type Response = Promise<Customer | null>;
  }
}

namespace ILeaveRoomRepository {
  export type Implementation = {
    leave: (params: ILeaveRoomRepository.Leave.Params)
      => ILeaveRoomRepository.Leave.Response;
    findRoomById: (params: ILeaveRoomRepository.FindRoomById.Params)
      => ILeaveRoomRepository.FindRoomById.Response;
    findCustomerById: (params: ILeaveRoomRepository.FindCustomerById.Params)
      => ILeaveRoomRepository.FindCustomerById.Response;
  };
}

export { ILeaveRoomRepository };