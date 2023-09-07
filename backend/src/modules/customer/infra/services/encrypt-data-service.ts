import { IEncryptDataService } from "./contracts/i-encrypt-data-service";

import { hash } from "bcrypt"




export class EncryptDataService
  implements IEncryptDataService.Implementation {
  async execute(props: IEncryptDataService.Params):
    IEncryptDataService.Response {

    const encryptDataServiceResponse = await hash(props, 8);

    return encryptDataServiceResponse;
  }
}