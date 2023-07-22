import { ICreateRoomRepository } from "../repository/i-create-room-repository";
import { ICreateRoomValidator } from "../validators/create-room-validators";



export namespace ICreateRooom {
  export type Params = {
    name: string;
    description: string;
    title: string;
    teacherId: string
  }

  export type Response = {
    id: string;
    createtAt: Date;
    name: string;
    description: string;
    title: string;
    teacherId: string;
    studentList: any[]
  }
}

export class CreateRoomUseCase {
  constructor(
    private createRoomRepository: ICreateRoomRepository.Implementation,
    private createRoomValidator: ICreateRoomValidator
  ) { }

  async execute(props: ICreateRooom.Params): Promise<void> {
    this.createRoomValidator.validade(props);

    await this.createRoomRepository.create({
      description: props.description,
      name: props.name,
      teacherId: props.teacherId,
      title: props.title,
    })

  }
}