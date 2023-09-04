import { ICreateUUIDTokenService } from "./contracts/i-create-uuid-token-service";

import crypto from "crypto"




export class CreateUUIDTokenService
  implements ICreateUUIDTokenService.Implementation {

  create(props: ICreateUUIDTokenService.Params) {
    const generageUUIDTokeResponse = crypto.randomUUID();
    return generageUUIDTokeResponse;
  };
}