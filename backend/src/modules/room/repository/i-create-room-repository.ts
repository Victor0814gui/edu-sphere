import { Room } from "../../../aplication/entities/room"



namespace ICreateRoomRepository {
  export namespace Create {
    export interface Params {
      id: string;
      closed: boolean;
      name: string;
      type: string;
      published: boolean;
      createdAt: Date;
      teacherId: string
      description: string;
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
    create: (props: ICreateRoomRepository.Create.Params) => Promise<ICreateRoomRepository.Create.Response>;
    findByCode: (props: ICreateRoomRepository.FindByCode.Params) => Promise<ICreateRoomRepository.FindByCode.Response | null>;
  }
}




export {
  ICreateRoomRepository,
}