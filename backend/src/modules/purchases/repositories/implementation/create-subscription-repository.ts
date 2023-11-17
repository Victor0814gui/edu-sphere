import { PrismaClient } from "@prisma/client";
import { ICreateSubscriptionRepository } from "../i-purchase-subscription-repository";



const database = new PrismaClient();


export class CreateSubscriptionRepository
  implements ICreateSubscriptionRepository.Implementation {

  public async findByCustomer(params: ICreateSubscriptionRepository.FindByCustomer.Params):
    ICreateSubscriptionRepository.FindByCustomer.Response {

    const deleteCustomerSubscription = await database.user.findFirst({
      where: {
        id: params.customerId,
      },
    })

    return deleteCustomerSubscription;
  }

  public async findBySubscription(params: ICreateSubscriptionRepository.FindBySubscription.Params):
    ICreateSubscriptionRepository.FindBySubscription.Response {

    const deleteCustomerSubscription = await database.product.findFirst({
      where: {
        id: params.subscriptionId,
      },
    })

    return deleteCustomerSubscription;
  }

  public async updateSubscription(params: ICreateSubscriptionRepository.UpdateSubscription.Params):
    ICreateSubscriptionRepository.UpdateSubscription.Response {

    const deleteCustomerSubscription = await database.product.update({
      where: {
        id: params.subscriptionId,
      },
      data: {
        users: {
          connect: [{
            id: params.customerId,
          }]
        }
      }
    })

    return deleteCustomerSubscription;
  }

  public async updateCustomer(
    params: ICreateSubscriptionRepository.UpdateCustomer.Params
  ): ICreateSubscriptionRepository.UpdateCustomer.Response {

    const updateCustomerPermissionsAndRoles = await database.user.update({
      where: {
        id: params.customerId,
      },
      data: {
        permissions: {
          connect: params.permissions,
        },
        roles: {
          connect: params.roles,
        }
      }
    })

    return updateCustomerPermissionsAndRoles;
  }
};