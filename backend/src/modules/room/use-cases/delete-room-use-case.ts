import { IDeleteRoomRepository } from "../repository/i-delete-room-respository";
import RoomBusinessException from "@room/infra/exceptions/business-exception";
import { IDeleteRoomUseCase } from "../interfaces/i-delete-room-use-case";



export class DeleteRoomsUseCase
  implements IDeleteRoomUseCase.Implementation {
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