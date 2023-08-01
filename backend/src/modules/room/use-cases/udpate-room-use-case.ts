import RoomBusinessException from "@room/infra/exceptions/business-exception";
import { inject, injectable } from "tsyringe";
import { IUpdateRoomRepository } from "../repository/i-update-room-respository";
import { IUpdateRooomUseCase } from "../interfaces/i-udpate-room-use-case";



@injectable()
export class UpdateRoomUseCase
  implements IUpdateRooomUseCase.Implementation {
  constructor(
    @inject("UpdateRoomRepository")
    private updateRoomRepository: IUpdateRoomRepository.Implementation,
  ) { }

  async execute(props: IUpdateRooomUseCase.Params):
    Promise<IUpdateRooomUseCase.Response> {

    const verifyRoomAlareadyExists = await this.updateRoomRepository.findByCode({
      code: props.code
    })

    if (!verifyRoomAlareadyExists?.id) {
      throw new RoomBusinessException("room does not exists", 404);
    }

    const udpateRoomResponse = await this.updateRoomRepository.update({
      description: props.description,
      name: props.name,
      teacherId: props.teacherId,
      updatedAt: new Date(),
      id: verifyRoomAlareadyExists.id,
    })

    return udpateRoomResponse;
  }
}