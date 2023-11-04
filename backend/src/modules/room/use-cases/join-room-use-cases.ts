import { inject, injectable } from "tsyringe";
import { IJoinRoomUseCase } from "../interfaces/i-join-room-use-cases";
import { IJoinRoomRepository } from "../repository/i-join-room-repository";
import RoomBusinessException from "../infra/exceptions/business-exception";




@injectable()
export class JoinRoomUseCase
  implements IJoinRoomUseCase.Implementation {
  constructor(
    @inject("JoinRoomRepository")
    private joinRoomRepository: IJoinRoomRepository.Implementation,
  ) { }
  public async execute(params: IJoinRoomUseCase.Params):
    IJoinRoomUseCase.Response {

    const verifyCustomerAlreadyExists = await this.joinRoomRepository.findRoomById({
      roomId: params.roomId,
    });

    if (!verifyCustomerAlreadyExists?.id) {
      throw new RoomBusinessException("Room does not exits", 404);
    }

    const verifyRoomAlreadyExists =
      await this.joinRoomRepository.findCustomerById({
        customerId: params.customerId,
      })

    if (!verifyRoomAlreadyExists?.id) {
      throw new RoomBusinessException("Customer does not exits", 404);
    }

    const joinRoomRepositoryResponse =
      await this.joinRoomRepository.join({
        customerId: params.customerId,
        roomId: params.roomId,
      })

    return joinRoomRepositoryResponse;
  }
}