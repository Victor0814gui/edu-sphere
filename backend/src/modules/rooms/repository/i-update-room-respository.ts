import { Room } from "../../../aplication/entities/room"



namespace IUpdateRoomRepository {
  export namespace Update {
    export interface Params {
      id: string;
      name: string;
      description: string;
      teacherId: string
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
    listUnique: (props: IUpdateRoomRepository.ListUnique.Params) => Promise<IUpdateRoomRepository.ListUnique.Response | null>;
    update: (props: IUpdateRoomRepository.Update.Params) => Promise<IUpdateRoomRepository.Update.Response>;
  }
}




export {
  IUpdateRoomRepository,
}