import { Request, Response } from "express";
import { CreateRoomUseCase } from "@room/use-cases/create-room-use-case";
import { container, injectable } from "tsyringe";




interface ICreateRoomContollerRequest {
  title: string;
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
      title: body.title,
      description: body.description,
      type: body.type,
      teacherId: body.teacherId,
      published: body.published,
    });

    return response.status(201).json(createRoomUseCaseInstanceResponse)
  }
}