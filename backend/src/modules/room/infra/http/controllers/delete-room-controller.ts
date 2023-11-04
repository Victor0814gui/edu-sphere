import { Request, Response } from "express";
import { DeleteRoomsUseCase } from "@room/use-cases/delete-room-use-case";
import { container, injectable } from "tsyringe";




interface IDeleteRoomController {
  code: string
}


@injectable()
export class DeleteRoomController {
  public async handler(request: Request, response: Response) {
    const body = request.body as IDeleteRoomController;

    const deleteRoomUseCaseInstance = container.resolve(DeleteRoomsUseCase);
    const deleteRoomUseCaseInstanceResponse = await deleteRoomUseCaseInstance.execute(body);

    return response.status(201).json(deleteRoomUseCaseInstanceResponse);
  }
}