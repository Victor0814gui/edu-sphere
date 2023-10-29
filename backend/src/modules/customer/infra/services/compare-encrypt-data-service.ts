import { compare } from "bcrypt";
import { ICompareEncryptDataService } from "./contracts/i-compare-encrypt-data-service";



export class CompareEncryptDataService
  implements ICompareEncryptDataService.Implementation {
  async execute(props: ICompareEncryptDataService.Params):
    ICompareEncryptDataService.Response {

    const compareEncryptDataServiceResponse = await compare(props.encrypted, props.data)

    return compareEncryptDataServiceResponse;
  }
}