import { container } from "tsyringe";
import { Request, Response } from "express";
import { SearchRoomUseCase } from "../../../use-cases/search-room-use-case";


type SearchRoomControllerParams = {
  code: string;
}

export class SearchRoomController {
  public async handler(request: Request, response: Response): Promise<Response> {
    const query = request.query as SearchRoomControllerParams;

    const searchRoomUseCase = container.resolve(SearchRoomUseCase);

    const searchRoomUseCaseResponse =
      await searchRoomUseCase.execute(query);

    return response.json(searchRoomUseCaseResponse);
  }
}