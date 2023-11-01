import { injectable, inject } from "tsyringe";
import { ICreateRoomRepository } from "../i-create-room-repository";
import { PrismaClient } from '@prisma/client'
import { IListRoomsRepository } from "../i-list-room-repository";

const database = new PrismaClient();

export class ListRoomsRepository
  implements IListRoomsRepository.Implementation {

  public async listMany(props: IListRoomsRepository.Params):
    IListRoomsRepository.Response {

    const listUniqueRoomResponse = await database.room.findMany({
      where: {
        published: true,
      }
    });

    return listUniqueRoomResponse;
  }
}