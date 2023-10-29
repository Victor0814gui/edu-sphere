import crypto from "crypto"
import { ICreateUUIDTokenService } from "./contracts/i-create-uuid-token-service";



export class CreateUUIDTokenService
  implements ICreateUUIDTokenService.Implementation {

  create(props: ICreateUUIDTokenService.Params):
    ICreateUUIDTokenService.Response {
    const generageUUIDTokeResponse = crypto.randomUUID();

    return generageUUIDTokeResponse;
  };
}