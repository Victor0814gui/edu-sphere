import RoomBusinessException from "@room/infra/exceptions/business-exception";
import { inject, injectable } from "tsyringe";
import { IUpdateRoomRepository } from "../repository/i-update-room-respository";


export namespace IListRooom {
  export type Params = {
    code: string;
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
export class UpdateRoomUseCase {
  constructor(
    @inject("UpdateRoomRepository")
    private updateRoomRepository: IUpdateRoomRepository.Implementation,
  ) { }

  async execute(props: IListRooom.Params): Promise<IListRooom.Response> {

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