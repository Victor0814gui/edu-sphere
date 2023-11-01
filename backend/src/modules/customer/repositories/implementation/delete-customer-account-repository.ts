import { PrismaClient } from "@prisma/client";
import { IDeleteCustomerAccountRepository } from "../i-delete-customer-account-repository";

const database = new PrismaClient();

export class DeleteCustomerAccountRepository
  implements IDeleteCustomerAccountRepository.Implementation {

  public async delete(params: IDeleteCustomerAccountRepository.Delete.Params):
    IDeleteCustomerAccountRepository.Delete.Response {

    const findCustomer = database.user.findFirst({
      where: {
        id: params.customerId,
      },
    })

    return findCustomer;
  };

  public async findById(params: IDeleteCustomerAccountRepository.FindById.Params):
    IDeleteCustomerAccountRepository.FindById.Response {

    const findCustomer = database.user.delete({
      where: {
        id: params.customerId,
      }
    })

    return findCustomer;
  };
}