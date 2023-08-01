import crypto from "crypto";
import { inject, injectable } from "tsyringe";
import { ICreateRoomRepository } from "../repository/i-create-room-repository";
import RoomBusinessException from "@room/infra/exceptions/business-exception";
import { ICreateRooomUseCase } from "../interfaces/i-create-room-use-case";



@injectable()
export class CreateRoomUseCase
  implements ICreateRooomUseCase.Implementation {
  constructor(
    @inject("CreateRoomRepository")
    private createRoomRepository: ICreateRoomRepository.Implementation,
  ) { }

  async execute(props: ICreateRooomUseCase.Params):
    Promise<ICreateRooomUseCase.Response> {

    if (!props.teacherId && !props.description && !props.type && !props.name) {
      throw new RoomBusinessException("data is invalid", 403)
    }

    const createRoomResponse = await this.createRoomRepository.create({
      id: crypto.randomUUID(),
      createdAt: new Date(),
      closed: false,
      published: props.published,
      description: props.description,
      name: props.name,
      teacherId: props.teacherId,
      type: props.type,
    })

    return createRoomResponse;
  }
}