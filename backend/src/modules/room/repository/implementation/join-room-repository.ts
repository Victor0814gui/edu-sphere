import { PrismaClient } from "@prisma/client";
import { IJoinRoomRepository } from "../i-join-room-repository";


const database = new PrismaClient();

export class JoinRoomRepository
  implements IJoinRoomRepository.Implementation {
  public async join(params: IJoinRoomRepository.Join.Params):
    IJoinRoomRepository.Join.Response {

    const joinRoomResponse = await database.room.update({
      where: {
        id: params.roomId,
      }, data: {
        users: {
          connect: [{
            id: params.customerId,
          }]
        }
      }
    })

    return joinRoomResponse;
  }

  public async findRoomById(params: IJoinRoomRepository.FindRoomById.Params):
    IJoinRoomRepository.FindRoomById.Response {

    const findRoomByIdResponse = await database.room.findFirst({
      where: {
        id: params.roomId,
      }
    })

    return findRoomByIdResponse;
  }

  public async findCustomerById(params: IJoinRoomRepository.FindCustomerById.Params):
    IJoinRoomRepository.FindCustomerById.Response {

    const findRoomByIdResponse = await database.user.findFirst({
      where: {
        id: params.customerId,
      }
    })

    return findRoomByIdResponse;
  }
}