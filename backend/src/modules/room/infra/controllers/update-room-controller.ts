import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { UpdateRoomUseCase } from "@/src/modules/room/use-cases/update-room-use-case";



interface IUpdateRoomController {
  code: string;
  title: string;
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