import { PrismaClient } from "@prisma/client";
import { ICustomerAuthorizationAccountRepository } from "../i-customer-authorization-account-repository";


const database = new PrismaClient();

export class CustomerAuthorizationAccountRepository
  implements ICustomerAuthorizationAccountRepository.Implementation {

  async findByEmail(props: ICustomerAuthorizationAccountRepository.FindByEmail.Params):
    ICustomerAuthorizationAccountRepository.FindByEmail.Response {

    const findByEmailResponse = await database.user.findFirst({
      where: {
        email: props.email
      },
    });

    return findByEmailResponse;
  };

  async update(props: ICustomerAuthorizationAccountRepository.Update.Params):
    ICustomerAuthorizationAccountRepository.Update.Response {

    const updateCustomerAccountResponse = await database.user.update({
      where: {
        email: props.email
      },
      data: {
        status: props.status,
      }
    });

    return updateCustomerAccountResponse;
  };
}