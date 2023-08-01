import { Request, Response } from "express";
import { CreateRoomUseCase } from "../../use-cases/create-room-use-case";




interface ICreateRoomContollerRequest {
  name: string;
  description: string;
  type: string;
  teacherId: string
}



export class CreateRoomContoller {
  constructor(
    private createRoomUseCase: CreateRoomUseCase
  ) { }
  async handler(request: Request, response: Response) {
    const data = request.body as ICreateRoomContollerRequest;

    const createRoomUseCaseResponse = this.createRoomUseCase.execute(data);

    return response.status(201).json(createRoomUseCaseResponse)
  }
}