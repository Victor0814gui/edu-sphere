import { ICreateRoomRepository } from "../repository/i-create-room-repository";
import { ICreateRoomValidator } from "../validators/create-room-validators";



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

export class UpdateRoomUseCase {
  constructor(
    private updateRoomRepository: IUpdateRoomRepository.Implementation,
    private updateRoomValidator: IUpdateRoomValidator
  ) { }

  async execute(props: IListRooom.Params): Promise<IListRooom.Response> {
    this.updateRoomValidator.validade(props);

    const udpateRoomResponse = await this.updateRoomRepository.create({
      description: props.description,
      name: props.name,
      teacherId: props.teacherId,
      title: props.title,
    })

    return udpateRoomResponse;
  }
}