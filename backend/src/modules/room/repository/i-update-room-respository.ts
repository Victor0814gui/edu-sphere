import { Room } from "../../../aplication/entities/room"



namespace IUpdateRoomRepository {
  export namespace Update {
    export interface Params {
      id: string;
      name: string;
      description: string;
      teacherId: string
      updatedAt: Date;
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
    findByCode: (props: IUpdateRoomRepository.FindByCode.Params) => Promise<IUpdateRoomRepository.FindByCode.Response | null>;
    update: (props: IUpdateRoomRepository.Update.Params) => Promise<IUpdateRoomRepository.Update.Response>;
  }
}




export {
  IUpdateRoomRepository,
}