import { injectable, inject } from "tsyringe";
import { RoomBusinessException } from "@room/infra/exceptions/business-exception";
import { IDeleteRoomRepository } from "../repository/i-delete-room-repository";
import { IDeleteRoomUseCase } from "../interfaces/i-delete-room-use-case";


@injectable()
export class DeleteRoomsUseCase
  implements IDeleteRoomUseCase.Implementation {
  constructor(
    @inject("DeleteRoomRepository")
    private deleteRoomRepository: IDeleteRoomRepository.Implementation,
  ) { }

  public async execute(props: IDeleteRoomUseCase.Params):
    IDeleteRoomUseCase.Response {

    if (!props.code) {
      throw new RoomBusinessException("Room code is invalid", 403);
    }

    const verifyRoomAlreadyExists = await this.deleteRoomRepository.findByCode({
      code: props.code,
    })

    if (!verifyRoomAlreadyExists?.id) {
      throw new RoomBusinessException("The room does not exist", 404);
    }

    const deleteRoomResponse = await this.deleteRoomRepository.delete({
      id: verifyRoomAlreadyExists.id!,
    });

    return deleteRoomResponse;
  }
}