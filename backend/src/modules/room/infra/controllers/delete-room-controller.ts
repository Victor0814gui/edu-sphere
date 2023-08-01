import { Request, Response } from "express";
import { DeleteRoomsUseCase } from "../../use-cases/delete-room-use-case";
import { container } from "tsyringe";




interface IDeleteRoomController {
  code: string
}



export class DeleteRoomContoller {
  constructor(
    private deleteRoomUseCase: DeleteRoomsUseCase
  ) { }
  async handler(request: Request, response: Response) {
    const body = request.body as IDeleteRoomController;

    const deleteRoomUseCaseInstance = container.resolve(DeleteRoomsUseCase);
    const deleteRoomUseCaseInstanceResponse = deleteRoomUseCaseInstance.execute(body);

    return response.status(201).json(deleteRoomUseCaseInstanceResponse);
  }
}