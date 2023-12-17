import { inject, injectable } from "tsyringe";
import { ISearchRoomUseCase } from "../interfaces/i-search-room-use-case";
import { ISearchRoomRepository } from "../repository/i-search-room-repository";





@injectable()
export class SearchRoomUseCase
  implements ISearchRoomUseCase.Implementation {
  constructor(
    @inject("SearchRoomRepository")
    private searchRoomRepository: ISearchRoomRepository.Implementation,
  ) { }
  public async execute(params: ISearchRoomUseCase.Params):
    ISearchRoomUseCase.Response {
    const searchRoomRepositoryResponse =
      await this.searchRoomRepository.findRoom(params);

    return searchRoomRepositoryResponse
  }
}