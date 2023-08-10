import { PrismaClient } from '@prisma/client'
import { IUpdateRoomRepository } from "../i-update-room-respository";

const database = new PrismaClient();


export class UpdateRoomRepository implements IUpdateRoomRepository.Implementation {

  async update(props: IUpdateRoomRepository.Update.Params):
    Promise<IUpdateRoomRepository.Update.Response> {
    const updateRoomResponse = await database.room.update({
      where: {
        id: props.id
      },
      data: {
        slug: props.slug,
        updatedAt: new Date(),
        title: props.title,
        description: props.description,
      }
    })

    return updateRoomResponse;
  }

  async findByCode(props: IUpdateRoomRepository.FindByCode.Params):
    Promise<IUpdateRoomRepository.FindByCode.Response | null> {

    const listUniqueRoomResponse = await database.room.findFirst({
      where: {
        id: props.code,
      },
    });

    return listUniqueRoomResponse;
  }

}