import { PrismaClient } from '@prisma/client'
import { IUpdateRoomRepository } from "../i-update-room-respository";



export class UpdateRoomRepository implements IUpdateRoomRepository.Implementation {
  constructor(
    private prisma: PrismaClient
  ) { }

  async update(props: IUpdateRoomRepository.Update.Params):
    Promise<IUpdateRoomRepository.Update.Response> {
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

  async listUnique(props: IUpdateRoomRepository.ListUnique.Params):
    Promise<IUpdateRoomRepository.ListUnique.Response | null> {

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