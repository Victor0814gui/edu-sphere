import { inject, injectable } from "tsyringe";
import RoomBusinessException from "@room/infra/exceptions/business-exception";
import { IUpdateRoomRepository } from "../repository/i-update-room-respository";
import { IUpdateRooomUseCase } from "../interfaces/i-update-room-use-case";



@injectable()
export class UpdateRoomUseCase
  implements IUpdateRooomUseCase.Implementation {
  constructor(
    @inject("UpdateRoomRepository")
    private updateRoomRepository: IUpdateRoomRepository.Implementation,
  ) { }

  async execute(props: IUpdateRooomUseCase.Params):
    Promise<IUpdateRooomUseCase.Response> {

    if (!props.teacherId
      && !props.description
      && !props.type
      && !props.title
      && !props.code
      && props.published) {
      throw new RoomBusinessException("data is invalid", 403)
    }

    const verifyRoomAlareadyExists = await this.updateRoomRepository.findByCode({
      code: props.code
    })

    if (!verifyRoomAlareadyExists?.id) {
      throw new RoomBusinessException("room does not exists", 404);
    }

    const slug = props.title.replace(/ /g, "-").toLowerCase();

    const udpateRoomResponse = await this.updateRoomRepository.update({
      slug: slug,
      description: props.description,
      title: props.title,
      teacherId: props.teacherId,
      updatedAt: new Date(),
      id: verifyRoomAlareadyExists.id,
    })

    return udpateRoomResponse;
  }
}