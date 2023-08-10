import { injectable, inject } from "tsyringe";
import RoomBusinessException from "@room/infra/exceptions/business-exception";
import { IDeleteRoomRepository } from "../repository/i-delete-room-respository";
import { IDeleteRoomUseCase } from "../interfaces/i-delete-room-use-case";


@injectable()
export class DeleteRoomsUseCase
  implements IDeleteRoomUseCase.Implementation {
  constructor(
    @inject("DeleteRoomRepository")
    private deleteRoomRepository: IDeleteRoomRepository.Implementation,
  ) { }

  async execute(props: IDeleteRoomUseCase.Params):
    Promise<IDeleteRoomUseCase.Response> {

    if (!props.code) {
      throw new RoomBusinessException("room code does not exists", 403);
    }

    const verifyRoomAlareadyExists = await this.deleteRoomRepository.findByCode({
      code: props.code,
    })

    if (!verifyRoomAlareadyExists?.id) {
      throw new RoomBusinessException("the room does not exist", 404);
    }

    const deleteRoomResponse = await this.deleteRoomRepository.delete({
      id: verifyRoomAlareadyExists.id!,
    });

    return deleteRoomResponse;
  }
}