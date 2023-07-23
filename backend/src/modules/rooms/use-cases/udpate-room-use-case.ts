import { IUpdateRoomRepository } from "../repository/i-update-room-respository";


export namespace IListRooom {
  export type Params = {
    id: string;
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
  ) { }

  async execute(props: IListRooom.Params): Promise<IListRooom.Response> {

    const udpateRoomResponse = await this.updateRoomRepository.update({
      description: props.description,
      name: props.name,
      teacherId: props.teacherId,
      id: props.id,
    })

    return udpateRoomResponse;
  }
}