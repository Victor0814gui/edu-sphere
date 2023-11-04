import { ICreateRoomRepository } from "../i-create-room-repository";
import { PrismaClient } from '@prisma/client'


const database = new PrismaClient();

export class CreateRoomRepository
  implements ICreateRoomRepository.Implementation {

  public async create(props: ICreateRoomRepository.Create.Params):
    ICreateRoomRepository.Create.Response {

    const createRoomResponse = await database.room.create({
      data: props
    })

    return createRoomResponse;
  }

  public async findByTitle(props: ICreateRoomRepository.FindByTitle.Params):
    ICreateRoomRepository.FindByTitle.Response {

    const listManyRoomsResponse = await database.room.findFirst({
      where: {
        slug: props.slug
      },
    });

    return listManyRoomsResponse;
  }

}