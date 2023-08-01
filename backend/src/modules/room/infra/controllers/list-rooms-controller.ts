import { Request, Response } from "express";
import { ListRoomsUseCase } from "../../use-cases/list-room-use-case";






export class ListRoomsContoller {
  constructor(
    private listRoomsUseCase: ListRoomsUseCase
  ) { }
  async handler(request: Request, response: Response) {

    const ListRoomsUseCaseResponse = this.listRoomsUseCase.execute({});

    return response.status(201).json(ListRoomsUseCaseResponse)
  }
}