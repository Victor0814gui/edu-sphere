import { Room } from "@/src/shared/application/entities/room"



declare namespace IUpdateRoomRepository {
  export namespace Update {
    export type Params = {
      id: string;
      title: string;
      description: string;
      teacherId: string
      updatedAt: Date;
      slug: string;
    }
    export type Response = Promise<Room>
  }

  export namespace FindByCode {
    export type Params = {
      code: string;
    }

    export type Response = Promise<Room | null>;
  }

  export type Implementation = {
    findByCode: (props: IUpdateRoomRepository.FindByCode.Params)
      => IUpdateRoomRepository.FindByCode.Response;
    update: (props: IUpdateRoomRepository.Update.Params)
      => IUpdateRoomRepository.Update.Response;
  }
}




export {
  IUpdateRoomRepository,
}