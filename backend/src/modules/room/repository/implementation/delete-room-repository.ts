import { injectable, inject } from "tsyringe";
import { ICreateRoomRepository } from "../i-create-room-repository";
import { PrismaClient } from '@prisma/client'
import { IDeleteRoomRepository } from "../i-delete-room-respository";



export class DeleteRoomRepository implements IDeleteRoomRepository.Implementation {
  constructor(
    private prisma: PrismaClient
  ) { }

  async findByCode(props: IDeleteRoomRepository.Delete.Params):
    Promise<IDeleteRoomRepository.Delete.Response> {

    const updateRoomResponse = await this.prisma.room.delete({
      where: {
        id: props.id
      },
    })

    return updateRoomResponse;
  }

  async delete(props: IDeleteRoomRepository.FindByCode.Params):
    Promise<ICreateRoomRepository.ListUnique.Response | null> {

    const listUniqueRoomResponse = await this.prisma.room.findFirst({
      where: {
        id: props.id,
      },
    });

    return listUniqueRoomResponse;
  }

}