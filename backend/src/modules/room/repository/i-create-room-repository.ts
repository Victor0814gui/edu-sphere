import { Room } from "@aplication/entities/room"



namespace ICreateRoomRepository {
  export namespace Create {
    export interface Params {
      id: string;
      closed: boolean;
      title: string;
      type: string;
      published: boolean;
      createdAt: Date;
      teacherId: string
      description: string;
      slug: string;
    }
    export interface Response extends Room { };
  }

  export namespace FindByTitle {
    export interface Params {
      slug: string;
    }
    export interface Response extends Room { };
  }

  export interface Implementation {
    create: (props: ICreateRoomRepository.Create.Params) => Promise<ICreateRoomRepository.Create.Response>;
    findByTitle: (props: ICreateRoomRepository.FindByTitle.Params) => Promise<ICreateRoomRepository.FindByTitle.Response | null>;
  }
}




export {
  ICreateRoomRepository,
}