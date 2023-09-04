import { ICreateNewDateService } from "./contracts/i-create-new-date-service";





export class CreateNewDateService
  implements ICreateNewDateService.Implementation {
  create(props: ICreateNewDateService.Params):
    ICreateNewDateService.Response {

    const createNewDateResponse = new Date();

    return createNewDateResponse;
  }
}