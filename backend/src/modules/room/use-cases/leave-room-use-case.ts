import { inject, injectable } from "tsyringe";
import { ILeaveRoomUseCase } from "../interfaces/i-leave-room-use-case"
import { ILeaveRoomRepository } from "../repository/i-leave-room-repository";
import RoomBusinessException from "../infra/exceptions/business-exception";



@injectable()
export class LeaveRoomUseCase
  implements ILeaveRoomUseCase.Implementation {
  constructor(
    @inject("LeaveRoomRepository")
    private leaveRoomRepository: ILeaveRoomRepository.Implementation,
  ) { }
  public async execute(params: ILeaveRoomUseCase.Params):
    ILeaveRoomUseCase.Response {


    const verifyCustomerAlreadyExists = await this.leaveRoomRepository.findRoomById({
      roomId: params.roomId,
    });

    if (!verifyCustomerAlreadyExists?.id) {
      throw new RoomBusinessException("Room does not exits", 404);
    }

    const verifyRoomAlreadyExists =
      await this.leaveRoomRepository.findCustomerById({
        customerId: params.customerId,
      })

    if (!verifyRoomAlreadyExists?.id) {
      throw new RoomBusinessException("Customer does not exits", 404);
    }

    const leaveRoomRepositoryResponse =
      await this.leaveRoomRepository.leave({
        customerId: params.customerId,
        roomId: params.roomId,
      })

    return leaveRoomRepositoryResponse;
  }
}