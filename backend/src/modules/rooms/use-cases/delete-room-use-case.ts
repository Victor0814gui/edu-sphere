import { ICreateRoomRepository } from "../repository/i-create-room-repository";
import { IDeleteRoomRepository } from "../repository/i-delete-room-respository";
import { IupdateRoomValidator } from "../validators/create-room-validators";



export namespace IListRooom {
  export type Params = {
    name: string;
    description: string;
    title: string;
    teacherId: string
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

export class DeleteRoomsUseCase {
  constructor(
    private deleteRoomRepository: IDeleteRoomRepository.Implementation,
    private updateRoomValidator: IUpdateRoomValidator
  ) { }

  async execute(props: IListRooom.Params): Promise<IListRooom.Response> {
    this.updateRoomValidator.validade(props);

    const udpateRoomResponse = await this.deleteRoomRepository.create({
      description: props.description,
      name: props.name,
      teacherId: props.teacherId,
      title: props.title,
    })

    return udpateRoomResponse;
  }
}