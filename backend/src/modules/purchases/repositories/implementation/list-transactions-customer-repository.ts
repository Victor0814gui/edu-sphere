import { PrismaClient } from "@prisma/client";
import { IListTransactionsCustomerRepository } from "../i-list-transactions-customer-repository";

const database = new PrismaClient();


export class ListTransactionsCustomerRepository
  implements IListTransactionsCustomerRepository.Implementation {
  public async list(params: IListTransactionsCustomerRepository.List.Params):
    IListTransactionsCustomerRepository.List.Response {

    const deleteCustomerSubscription = await database.transaction.findMany({
      where: {
        userId: params.customerId,
      },
    })

    return deleteCustomerSubscription;
  }
};