import { inject, injectable } from "tsyringe";
import { ISearchRoomRepository } from "../i-search-room-repository";
import { PrismaClient } from "@prisma/client";



const database = new PrismaClient();

export class SearchRoomRepository
  implements ISearchRoomRepository.Implementation {
  public async findRoom(params: ISearchRoomRepository.FindRoom.Params):
    ISearchRoomRepository.FindRoom.Response {
    const findRoomResponse = await database.room.findFirst({
      where: {
        id: params.code
      }
    })

    return findRoomResponse;
  }
}