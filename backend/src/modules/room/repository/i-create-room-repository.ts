import { Room } from "@/src/shared/application/entities/room"

declare namespace ICreateRoomRepository { }

namespace ICreateRoomRepository {
  export namespace Create {
    export type Params = {
      id: string;
      closed: boolean;
      title: string;
      type: string;
      published: boolean;
      createdAt: Date;
      authorId: string
      description: string;
      slug: string;
    }
    export type Response = Promise<Room>;
  }
}


namespace ICreateRoomRepository {
  export namespace FindByTitle {
    export type Params = {
      slug: string;
    }
    export type Response = Promise<Room | null>;
  }
}

namespace ICreateRoomRepository {
  export type Implementation = {
    create: (props: ICreateRoomRepository.Create.Params)
      => ICreateRoomRepository.Create.Response;
    findByTitle: (props: ICreateRoomRepository.FindByTitle.Params)
      => ICreateRoomRepository.FindByTitle.Response;
  }
}


export {
  ICreateRoomRepository,
}