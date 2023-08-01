import { Request, Response } from "express";
import { DeleteRoomsUseCase } from "../../use-cases/delete-room-use-case";




interface IDeleteRoomController {
  id: string
}



export class DeleteRoomContoller {
  constructor(
    private deleteRoomUseCase: DeleteRoomsUseCase
  ) { }
  async handler(request: Request, response: Response) {
    const data = request.body as IDeleteRoomController;

    const deleteRoomUseCaseResponse = this.deleteRoomUseCase.execute(data);

    return response.status(201).json(deleteRoomUseCaseResponse)
  }
}