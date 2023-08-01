import { IListRooomUseCase } from "../interfaces/i-list-room-use-case";
import { IListRoomsRepository } from "../repository/i-list-room-respository";




export class ListRoomsUseCase
  implements IListRooomUseCase.Implementation {
  constructor(
    private listRoomsRepository: IListRoomsRepository.Implementation,
  ) { }

  async execute(props: IListRooomUseCase.Params):
    Promise<IListRoomsRepository.Response | null> {

    const listRoomsResponse = await this.listRoomsRepository.listMany({})

    return listRoomsResponse;
  }
}