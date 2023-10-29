



declare namespace IDisconnectMultipleRoomsUseCase { };


namespace IDisconnectMultipleRoomsUseCase {
  export type Params = {};
}

namespace IDisconnectMultipleRoomsUseCase {
  export type Response = Promise<{}>;
}

namespace IDisconnectMultipleRoomsUseCase {
  export type Implementation = {
    execute: (params: IDisconnectMultipleRoomsUseCase.Params)
      => IDisconnectMultipleRoomsUseCase.Response;
  };
}

export { IDisconnectMultipleRoomsUseCase };