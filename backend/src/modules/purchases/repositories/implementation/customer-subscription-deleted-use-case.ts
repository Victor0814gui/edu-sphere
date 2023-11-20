import { PrismaClient } from "@prisma/client";
import { ICustomerSubscriptionDeletedRepository } from "../i-customer-subscription-deleted-use-case";



const database = new PrismaClient();

export class CustomerSubscriptionDeletedRepository
  implements ICustomerSubscriptionDeletedRepository.Implementation {

  public async findByCustomerId(params: ICustomerSubscriptionDeletedRepository.FindByCustomerId.Params):
    ICustomerSubscriptionDeletedRepository.FindByCustomerId.Response {
    const findCustomerResponse = await database.user.findFirst({
      where: {
        id: params.customerId,
      }
    });

    return findCustomerResponse;
  }

  public async findByProductId(params: ICustomerSubscriptionDeletedRepository.FindByProductId.Params):
    ICustomerSubscriptionDeletedRepository.FindByProductId.Response {
    const findCustomerResponse = await database.product.findFirst({
      where: {
        id: params.productId,
      }
    });

    return findCustomerResponse;
  }

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