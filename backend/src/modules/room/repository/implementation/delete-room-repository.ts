import { PrismaClient } from '@prisma/client'
import { IDeleteRoomRepository } from "../i-delete-room-respository";


const database = new PrismaClient();

export class DeleteRoomRepository implements IDeleteRoomRepository.Implementation {

  async delete(props: IDeleteRoomRepository.Delete.Params):
    Promise<IDeleteRoomRepository.Delete.Response> {

    const listUniqueRoomResponse = await database.room.delete({
      where: {
        id: props.id,
      },
    });

    return listUniqueRoomResponse;
  }

  async findByCode(props: IDeleteRoomRepository.FindByCode.Params):
    Promise<IDeleteRoomRepository.FindByCode.Response | null> {

    const updateRoomResponse = await database.room.findFirst({
      where: {
        id: props.code
      },
    })

    return updateRoomResponse;
  }
}