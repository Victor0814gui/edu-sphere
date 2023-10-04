import { inject, injectable } from "tsyringe";
import RoomBusinessException from "@room/infra/exceptions/business-exception";
import { IUpdateRoomRepository } from "../repository/i-update-room-repository";
import { IUpdateRoomUseCase } from "../interfaces/i-update-room-use-case";



@injectable()
export class UpdateRoomUseCase
  implements IUpdateRoomUseCase.Implementation {
  constructor(
    @inject("UpdateRoomRepository")
    private updateRoomRepository: IUpdateRoomRepository.Implementation,
  ) { }

  async execute(props: IUpdateRoomUseCase.Params):
    IUpdateRoomUseCase.Response {

    if (!props.teacherId
      && !props.description
      && !props.type
      && !props.title
      && !props.code
      && props.published) {
      throw new RoomBusinessException("data is invalid", 403)
    }

    const verifyRoomAlreadyExists = await this.updateRoomRepository.findByCode({
      code: props.code
    })

    if (!verifyRoomAlreadyExists?.id) {
      throw new RoomBusinessException("room does not exists", 404);
    }

    const slug = props.title.replace(/ /g, "-").toLowerCase();

    const updateRoomResponse = await this.updateRoomRepository.update({
      slug: slug,
      description: props.description,
      title: props.title,
      authorId: props.teacherId,
      updatedAt: new Date(),
      id: verifyRoomAlreadyExists.id,
    })

    return updateRoomResponse;
  }
}