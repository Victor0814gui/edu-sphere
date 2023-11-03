import { Room } from "@/src/shared/application/entities/room";
import { Customer } from "@/src/shared/application/entities/user";



declare namespace IJoinRoomRepository { };


namespace IJoinRoomRepository {
  export namespace FindRoomById {
    export type Params = {
      roomId: string;
    };
    export type Response = Promise<Room | null>;
  }
}

namespace IJoinRoomRepository {
  export namespace Join {
    export type Params = {
      roomId: string;
      customerId: string;
    };
    export type Response = Promise<Room>;
  }
}

namespace IJoinRoomRepository {
  export namespace FindCustomerById {
    export type Params = {
      customerId: string;
    };
    export type Response = Promise<Customer | null>;
  }
}

namespace IJoinRoomRepository {
  export type Implementation = {
    join: (params: IJoinRoomRepository.Join.Params)
      => IJoinRoomRepository.Join.Response;
    findRoomById: (params: IJoinRoomRepository.FindRoomById.Params)
      => IJoinRoomRepository.FindRoomById.Response;
    findCustomerById: (params: IJoinRoomRepository.FindCustomerById.Params)
      => IJoinRoomRepository.FindCustomerById.Response;
  };
}

export { IJoinRoomRepository };