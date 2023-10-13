import { injectable, inject } from "tsyringe";
import { IListRoomUseCase } from "../interfaces/i-list-room-use-case";
import { IListRoomsRepository } from "../repository/i-list-room-repository";




@injectable()
export class ListRoomsUseCase
  implements IListRoomUseCase.Implementation {
  constructor(
    @inject("ListRoomsRepository")
    private listRoomsRepository: IListRoomsRepository.Implementation,
  ) { }

  public async execute(props: IListRoomUseCase.Params):
    IListRoomUseCase.Response {

    const listRoomsResponse = await this.listRoomsRepository.listMany();

    return listRoomsResponse;
  }
}