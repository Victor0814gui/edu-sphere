import { Request, Response } from "express";
import { CreateRoomUseCase } from "../../use-cases/create-room-use-case";
import { container, inject, injectable } from "tsyringe";
import { ICreateRooomUseCase } from "../../interfaces/i-create-room-use-case";




interface ICreateRoomContollerRequest {
  name: string;
  description: string;
  type: string;
  teacherId: string
  published: boolean;
}


@injectable()
export class CreateRoomContoller {
  public async handler(request: Request, response: Response) {
    const body = request.body as ICreateRoomContollerRequest;

    const createRoomUseCaseInstance = container.resolve(CreateRoomUseCase);


    const createRoomUseCaseInstanceResponse = await createRoomUseCaseInstance.execute({
      name: body.name,
      description: body.description,
      type: body.type,
      teacherId: body.teacherId,
      published: body.published,
    });

    return response.status(201).json(createRoomUseCaseInstanceResponse)
  }
}