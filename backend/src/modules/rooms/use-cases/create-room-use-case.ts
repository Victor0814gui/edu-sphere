import { ICreateRoomRepository } from "../repository/i-create-room-repository";
import { ICreateRoomValidator } from "../validators/create-room-validators";



export namespace ICreateRooom {
  export type Params = {
    name: string;
    description: string;
    type: string;
    teacherId: string
  }

  export type Response = {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt?: Date | null;
    teacherId: string;
    studentList?: any[]
  }
}

export class CreateRoomUseCase {
  constructor(
    private createRoomRepository: ICreateRoomRepository.Implementation,
    private createRoomValidator: ICreateRoomValidator
  ) { }

  async execute(props: ICreateRooom.Params): Promise<ICreateRooom.Response> {
    this.createRoomValidator.validade(props);

    const createRoomResponse = await this.createRoomRepository.create({
      description: props.description,
      name: props.name,
      teacherId: props.teacherId,
      type: props.type,
    })

    return createRoomResponse;
  }
}