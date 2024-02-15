import { PrismaClient } from "@prisma/client";
import { IRecoveryCustomerPasswordRepository } from "../i-recovery-customer-password-repository";

 const database = new PrismaClient();

export class RecoveryCustomerPasswordRepository 
  implements IRecoveryCustomerPasswordRepository.Implementation{

    public async findCustomer(params: IRecoveryCustomerPasswordRepository.FindCustomer.Params):
      IRecoveryCustomerPasswordRepository.FindCustomer.Response{
        const findCustomerResponse = await database.user.findFirst({
          where:{
            email: params.email,
          }
        })

        return findCustomerResponse;
    }

  public async recoveryPassword(params: IRecoveryCustomerPasswordRepository.RecoveryPassword.Params):
    IRecoveryCustomerPasswordRepository.RecoveryPassword.Response{
      const response = {} as IRecoveryCustomerPasswordRepository.RecoveryPassword.Response;
     return response;
    }
}

export { IRecoveryCustomerPasswordRepository };