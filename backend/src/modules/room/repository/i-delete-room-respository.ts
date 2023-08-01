import { Room } from "../../../aplication/entities/room"



namespace IDeleteRoomRepository {

  export namespace Delete {
    export interface Params {
      id: string;
    }
    export interface Response extends Room { };
  }

  export namespace FindByCode {
    export interface Params {
      code: string;
    }
    export interface Response extends Room { };
  }

  export interface Implementation {
    delete: (props: IDeleteRoomRepository.Delete.Params) => Promise<IDeleteRoomRepository.Delete.Response>;
    findByCode: (props: IDeleteRoomRepository.FindByCode.Params) => Promise<IDeleteRoomRepository.FindByCode.Response | null>;
  }
}




export {
  IDeleteRoomRepository,
}