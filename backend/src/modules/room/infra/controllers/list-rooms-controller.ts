import { Request, Response } from "express";
import { ListRoomsUseCase } from "../../use-cases/list-room-use-case";




interface IListRoomsController {
  name: string;
  description: string;
  title: string;
  teacherId: string
}



export class ListRoomsContoller {
  constructor(
    private listRoomsUseCase: ListRoomsUseCase
  ) { }
  async handler(request: Request, response: Response) {

    const ListRoomsUseCaseResponse = this.listRoomsUseCase.execute({});

    return response.status(201).json(ListRoomsUseCaseResponse)
  }
}