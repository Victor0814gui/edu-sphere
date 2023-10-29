import { Socket } from "socket.io";



declare namespace IJoinRoomUseCase { };


namespace IJoinRoomUseCase {
  export type Params = {
    socket: Socket;
    data: {
      roomId: string;
      customerId: string;
    };
  };
}

namespace IJoinRoomUseCase {
  export type Response = Promise<void>;
}

namespace IJoinRoomUseCase {
  export type Implementation = {
    execute: (params: IJoinRoomUseCase.Params)
      => IJoinRoomUseCase.Response;
  };
}

export { IJoinRoomUseCase };