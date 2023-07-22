import { injectable, inject } from "tsyringe";
import { ICreateRoomRepository } from "../i-create-room-repository";
import { PrismaClient } from '@prisma/client'
import { IListRoomsRepository } from "../i-list-room-respository";



export class ListRoomsRepository implements IListRoomsRepository.Implementation {
  constructor(
    private prisma: PrismaClient
  ) { }

  async listMany(props: IListRoomsRepository.Params):
    Promise<IListRoomsRepository.Response | null> {

    const listUniqueRoomResponse = await this.prisma.room.findMany({
      include: {
        students: true,
      }
    });

    return listUniqueRoomResponse;
  }

}