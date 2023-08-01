import { Request, Response } from "express";
import { ListRoomsUseCase } from "../../use-cases/list-room-use-case";
import { container, injectable } from "tsyringe";





@injectable()
export class ListRoomsContoller {
  public async handler(request: Request, response: Response) {

    const listRoomsUseCaseInstance = container.resolve(ListRoomsUseCase);

    const listRoomsUseCaseInstanceResponse = await listRoomsUseCaseInstance.execute({});

    return response.status(201).json(listRoomsUseCaseInstanceResponse)
  }
}