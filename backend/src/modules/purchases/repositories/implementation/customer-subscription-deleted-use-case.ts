import { PrismaClient } from "@prisma/client";
import { ICustomerSubscriptionDeletedRepository } from "../i-customer-subscription-deleted-use-case";



const database = new PrismaClient();


export class CustomerSubscriptionDeletedRepository
  implements ICustomerSubscriptionDeletedRepository.Implementation {

  public async delete(params: ICustomerSubscriptionDeletedRepository.Delete.Params):
    ICustomerSubscriptionDeletedRepository.Delete.Response {

    const deleteCustomerSubscription = await database.user.update({
      where: {
        id: params.customerId,
      },
      data: {
        subscription: {
          disconnect: {
            id: params.subscriptionId,
          },
        }
      }
    })

    return deleteCustomerSubscription;
  }
};