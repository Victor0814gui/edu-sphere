import { Room } from "@aplication/entities/room"



namespace ICreateRoomRepository {
  export namespace Create {
    export type Params = {
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
    export type Response = Promise<Room>;
  }

  export namespace FindByTitle {
    export type Params = {
      slug: string;
    }
    export type Response = Promise<Room | null>;
  }

  export type Implementation = {
    create: (props: ICreateRoomRepository.Create.Params) => ICreateRoomRepository.Create.Response;
    findByTitle: (props: ICreateRoomRepository.FindByTitle.Params) => ICreateRoomRepository.FindByTitle.Response;
  }
}




export {
  ICreateRoomRepository,
}