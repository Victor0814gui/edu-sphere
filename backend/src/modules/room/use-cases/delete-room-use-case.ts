import { IDeleteRoomRepository } from "../repository/i-delete-room-respository";
import RoomBusinessException from "@room/infra/exceptions/business-exception";


export namespace IDeleteRoomUseCase {
  export type Params = {
    code: string;
  }

  export type Response = {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt?: Date | null;
    teacherId: string;
    studentList?: any[]
  }
}

export class DeleteRoomsUseCase {
  constructor(
    private deleteRoomRepository: IDeleteRoomRepository.Implementation,
  ) { }

  async execute(props: IDeleteRoomUseCase.Params):
    Promise<IDeleteRoomUseCase.Response> {

    const verifyRoomAlareadyExists = await this.deleteRoomRepository.findByCode({
      code: props.code,
    })

    if (!verifyRoomAlareadyExists?.id) {
      throw new RoomBusinessException("the room does not exist", 404)
    }

    const deleteRoomResponse = await this.deleteRoomRepository.delete({
      id: verifyRoomAlareadyExists.id!,
    })

    return deleteRoomResponse;
  }
}