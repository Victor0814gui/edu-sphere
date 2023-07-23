import { IDeleteRoomRepository } from "../repository/i-delete-room-respository";



export namespace IDeleteRoomUseCase {
  export type Params = {
    id: string
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
  ) { }

  async execute(props: IDeleteRoomUseCase.Params):
    Promise<IDeleteRoomUseCase.Response> {

    const deleteRoomResponse = await this.deleteRoomRepository.delete({
      id: props.id,
    })

    return deleteRoomResponse;
  }
}