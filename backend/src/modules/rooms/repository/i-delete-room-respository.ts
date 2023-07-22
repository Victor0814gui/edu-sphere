import { Room } from "../../../aplication/entities/room"



namespace IDeleteRoomRepository {

  export namespace Delete {
    export interface Params {
      id: string;
    }
    export interface Response extends Room { };
  }

  export namespace ListUnique {
    export interface Params {
      id: string;
    }
    export interface Response extends Room { };
  }

  export interface Implementation {
    delete: (props: IDeleteRoomRepository.Delete.Params) => Promise<IDeleteRoomRepository.Delete.Response>;
    listUnique: (props: IDeleteRoomRepository.ListUnique.Params) => Promise<IDeleteRoomRepository.ListUnique.Response | null>;
  }
}




export {
  IDeleteRoomRepository,
}