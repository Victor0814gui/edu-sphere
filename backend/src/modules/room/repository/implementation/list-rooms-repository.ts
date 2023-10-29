import { injectable, inject } from "tsyringe";
import { ICreateRoomRepository } from "../i-create-room-repository";
import { PrismaClient } from '@prisma/client'
import { IListRoomsRepository } from "../i-list-room-repository";

const database = new PrismaClient();

export class ListRoomsRepository
  implements IListRoomsRepository.Implementation {

  async listMany(props: IListRoomsRepository.Params):
    Promise<IListRoomsRepository.Response | null> {

    const listUniqueRoomResponse = await database.room.findMany();

    return listUniqueRoomResponse;
  }

}