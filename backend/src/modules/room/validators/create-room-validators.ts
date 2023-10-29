import { ICreateRooom } from "../use-cases/create-room-use-case";



export interface ICreateRoomValidator {
  validade: (props: ICreateRooom.Params) => void;
}




export class CreateRoomValidator implements ICreateRoomValidator {
  validade(props: ICreateRooom.Params): void {
    if (
      props.description !== null
      ?? props.name !== null
      ?? props.teacherId !== null
      ?? props.title !== null
    ) {
      throw new Error("properties does not exists")
    }
  }
}