import { injectable, inject } from "tsyringe";
import { ICreateRoomRepository } from "../i-create-room-repository";
import { PrismaClient } from '@prisma/client'



export class CreateRoomRepository implements ICreateRoomRepository.Implementation {
  constructor(
    private prisma: PrismaClient
  ) { }

  async create(props: ICreateRoomRepository.Create.Params):
    Promise<ICreateRoomRepository.Create.Response> {

    const createRoomResponse = await this.prisma.room.create({
      data: {
        id: crypto.randomUUID(),
        name: props.name,
        teacherId: props.teacherId,
        description: props.description,
        createdAt: new Date(),
      }
    })

    return createRoomResponse;
  }

  async update(props: ICreateRoomRepository.Update.Params):
    Promise<ICreateRoomRepository.Update.Response> {
    const updateRoomResponse = await this.prisma.room.update({
      where: {
        id: props.id
      },
      data: {
        updateAt: new Date(),
        name: props.name,
        description: props.description,
      }
    })

    return updateRoomResponse;
  }

  async delete(props: ICreateRoomRepository.Delete.Params):
    Promise<ICreateRoomRepository.Delete.Response> {

    const deleteRoomResponse = await this.prisma.room.delete({
      where: {
        id: props.id
      }
    })

    return deleteRoomResponse;
  }

  async listMany(props: ICreateRoomRepository.ListMany.Params):
    Promise<ICreateRoomRepository.ListMany.Response> {

    const listManyRoomsResponse = await this.prisma.room.findMany();

    return listManyRoomsResponse;
  }

  async listUnique(props: ICreateRoomRepository.ListUnique.Params):
    Promise<ICreateRoomRepository.ListUnique.Response | null> {

    const listUniqueRoomResponse = await this.prisma.room.findFirst({
      where: {
        id: props.id,
      },
      include: {
        students: true,
      }
    });

    return listUniqueRoomResponse;
  }

}