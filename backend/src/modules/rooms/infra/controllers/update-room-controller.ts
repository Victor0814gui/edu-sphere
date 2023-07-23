import { Request, Response } from "express";
import { UpdateRoomUseCase } from "../../use-cases/udpate-room-use-case";



interface IUpdateRoomController {
  name: string;
  description: string;
  title: string;
  teacherId: string;
  id: string;
}

export class UpdateRoomContoller {
  constructor(
    private updateRoomUseCase: UpdateRoomUseCase
  ) { }
  async handler(request: Request, response: Response) {
    const data = request.body as IUpdateRoomController;

    const updateRoomUseCaseResponse = this.updateRoomUseCase.execute(data);

    return response.status(201).json(updateRoomUseCaseResponse)
  }
}