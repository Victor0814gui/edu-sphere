import { Room } from "../../../aplication/entities/room"



namespace ICreateRoomRepository {
  export namespace Create {
    export interface Params {
      name: string;
      description: string;
      type: string;
      teacherId: string
    }
    export interface Response extends Room { };
  }

  export namespace Update {
    export interface Params {
      id: string;
      name: string;
      description: string;
      teacherId: string
    }
    export interface Response extends Room { };
  }

  export namespace Delete {
    export interface Params {
      id: string;
    }
    export interface Response extends Room { };
  }

  export namespace ListMany {
    export interface Params { }
    export interface Response extends Array<Room> { };
  }

  export namespace ListUnique {
    export interface Params {
      id: string;
    }
    export interface Response extends Room { };
  }

  export interface Implementation {
    create: (props: ICreateRoomRepository.Create.Params) => Promise<ICreateRoomRepository.Create.Response>;
    listUnique: (props: ICreateRoomRepository.ListUnique.Params) => Promise<ICreateRoomRepository.ListUnique.Response | null>;
  }
}




export {
  ICreateRoomRepository,
}