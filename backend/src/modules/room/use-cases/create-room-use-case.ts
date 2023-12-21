import crypto from "crypto";
import { inject, injectable } from "tsyringe";
import { ICreateRoomRepository } from "../repository/i-create-room-repository";
import { RoomBusinessException } from "@room/infra/exceptions/business-exception";
import { ICreateRoomUseCase } from "../interfaces/i-create-room-use-case";



@injectable()
export class CreateRoomUseCase
  implements ICreateRoomUseCase.Implementation {
  constructor(
    @inject("CreateRoomRepository")
    private createRoomRepository: ICreateRoomRepository.Implementation,
  ) { }
  public async execute(props: ICreateRoomUseCase.Params):
    ICreateRoomUseCase.Response {

    if (!props.authorId && !props.description && !props.type && !props.title) {
      throw new RoomBusinessException("data is invalid", 403)
    }

    const slug = props.title.replace(/ /g, "-").toLowerCase();

    const verifyRoomAlreadyExists = await this.createRoomRepository.findByTitle({
      slug: slug,
    });

    if (verifyRoomAlreadyExists?.id) {
      throw new RoomBusinessException("the room already exists", 403);
    }

    const createRoomResponse = await this.createRoomRepository.create({
      id: crypto.randomUUID(),
      slug: slug,
      closed: false,
      createdAt: new Date(),
      type: props.type,
      title: props.title,
      published: props.published,
      description: props.description,
      authorId: props.authorId,
    })

    return createRoomResponse;
  }
}