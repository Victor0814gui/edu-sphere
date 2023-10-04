import { NextFunction, Request, Response } from "express";
import { CreateRoomUseCase } from "@room/use-cases/create-room-use-case";
import { container, injectable } from "tsyringe";




interface ICreateRoomControllerRequest {
  title: string;
  description: string;
  type: string;
  teacherId: string
  published: boolean;
}


@injectable()
export class CreateRoomController {
  public async handler(request: Request, response: Response, next: NextFunction) {
    const body = request.body as ICreateRoomControllerRequest;

    console.log({ request })
    // const createRoomUseCaseInstance = container.resolve(CreateRoomUseCase);


    // const createRoomUseCaseInstanceResponse = await createRoomUseCaseInstance.execute({
    //   title: body.title,
    //   description: body.description,
    //   type: body.type,
    //   teacherId: body.teacherId,
    //   published: body.published,
    // });

    // return response.status(201).json(createRoomUseCaseInstanceResponse)
    return response.status(201).json(request.files)
  }
}