import { Request, Response } from "express";
import { UpdateRoomUseCase } from "../../use-cases/udpate-room-use-case";
import { container, injectable } from "tsyringe";



interface IUpdateRoomController {
  code: string;
  name: string;
  type: string;
  description: string;
  teacherId: string;
  published: boolean;
}

@injectable()
export class UpdateRoomContoller {
  public async handler(request: Request, response: Response) {
    const data = request.body as IUpdateRoomController;

    const updateRoomUseCaseInstance = container.resolve(UpdateRoomUseCase);

    const updateRoomUseCaseInstanceResponse = await updateRoomUseCaseInstance.execute(data);

    return response.status(201).json(updateRoomUseCaseInstanceResponse)
  }
}