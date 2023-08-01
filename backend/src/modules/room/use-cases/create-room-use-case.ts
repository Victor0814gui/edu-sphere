import crypto from "crypto";
import { inject, injectable } from "tsyringe";
import { ICreateRoomRepository } from "../repository/i-create-room-repository";
import { ICreateRoomValidator } from "../validators/create-room-validators";
import AppErrors from "@/src/shared/infra/errors/app-errors";



export namespace ICreateRooom {
  export type Params = {
    name: string;
    type: string;
    description: string;
    teacherId: string;
    published: boolean;
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


@injectable()
export class CreateRoomUseCase {
  constructor(
    @inject("CreateRoomRepository")
    private createRoomRepository: ICreateRoomRepository.Implementation,
  ) { }

  async execute(props: ICreateRooom.Params): Promise<ICreateRooom.Response> {
    if (!props.teacherId && !props.description && !props.type && !props.name) {
      throw new AppErrors("the data is invalid", 403)
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