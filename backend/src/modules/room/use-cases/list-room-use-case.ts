import { IListRoomsRepository } from "../repository/i-list-room-respository";


export namespace IListRooom {
  export type Params = {}

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

export class ListRoomsUseCase {
  constructor(
    private listRoomsRepository: IListRoomsRepository.Implementation,
  ) { }

  async execute(props: IListRooom.Params): Promise<IListRoomsRepository.Response | null> {

    const listRoomsResponse = await this.listRoomsRepository.listMany({})

    return listRoomsResponse;
  }
}