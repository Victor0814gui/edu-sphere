import { injectable, inject } from "tsyringe";
import { ICreateRoomRepository } from "../i-create-room-repository";
import { PrismaClient } from '@prisma/client'


const database = new PrismaClient();

export class CreateRoomRepository implements ICreateRoomRepository.Implementation {

  async create(props: ICreateRoomRepository.Create.Params):
    Promise<ICreateRoomRepository.Create.Response> {

    const createRoomResponse = await database.room.create({
      data: {
        id: props.id,
        closed: props.closed,
        type: props.type,
        name: props.name,
        published: props.published,
        teacherId: props.teacherId,
        description: props.description,
        createdAt: props.createdAt,
      }
    })

    return createRoomResponse;
  }

  async findByCode(props: ICreateRoomRepository.FindByCode.Params):
    Promise<ICreateRoomRepository.FindByCode.Response | null> {

    const listManyRoomsResponse = await database.room.findFirst({
      where: {
        id: props.code,
      }
    });

    return listManyRoomsResponse;
  }

}