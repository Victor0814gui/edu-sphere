import { injectable, inject } from "tsyringe";
import { ICreateRoomRepository } from "../i-create-room-repository";
import { PrismaClient } from '@prisma/client'


const database = new PrismaClient();

export class CreateRoomRepository
  implements ICreateRoomRepository.Implementation {

  async create(props: ICreateRoomRepository.Create.Params):
    Promise<ICreateRoomRepository.Create.Response> {

    const createRoomResponse = await database.room.create({
      data: {
        id: props.id,
        closed: props.closed,
        type: props.type,
        title: props.title,
        slug: props.slug,
        published: props.published,
        teacherId: props.teacherId,
        description: props.description,
        createdAt: props.createdAt,
      }
    })

    return createRoomResponse;
  }

  async findByTitle(props: ICreateRoomRepository.FindByTitle.Params):
    Promise<ICreateRoomRepository.FindByTitle.Response | null> {

    const listManyRoomsResponse = await database.room.findFirst({
      where: {
        slug: props.slug
      },
    });

    return listManyRoomsResponse;
  }

}