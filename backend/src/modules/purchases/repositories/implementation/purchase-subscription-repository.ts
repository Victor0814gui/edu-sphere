import { PrismaClient } from "@prisma/client";

import { IPurchaseSubscriptionRepository } from "../i-purchase-subscription-repository";

const database = new PrismaClient();


export class PurchaseSubscriptionRepository
  implements IPurchaseSubscriptionRepository.Implementation {
  public async findByPermissions(params: IPurchaseSubscriptionRepository.FindByPermissions.Params):
    IPurchaseSubscriptionRepository.FindByPermissions.Response {
    const response = {} as IPurchaseSubscriptionRepository.FindByPermissions.Response;
    return response
  }

  public async transaction(params: IPurchaseSubscriptionRepository.CreateTransaction.Params):
    IPurchaseSubscriptionRepository.CreateTransaction.Response {
    const createTransaction = await database.transaction.create({
      data: {
        ...params,
        products: {
          connect: [{
            id: params.subscriptionId,
          }]
        }
      },
    })

    return createTransaction;
  };

  public async findByRoles(params: IPurchaseSubscriptionRepository.FindByRoles.Params):
    IPurchaseSubscriptionRepository.FindByRoles.Response {
    const response = {} as IPurchaseSubscriptionRepository.FindByRoles.Response;
    return response
  }

  public async findByCustomer(params: IPurchaseSubscriptionRepository.FindByCustomer.Params):
    IPurchaseSubscriptionRepository.FindByCustomer.Response {

    const deleteCustomerSubscription = await database.user.findFirst({
      where: {
        id: params.customerId,
      },
    })

    return deleteCustomerSubscription;
  }

  public async findBySubscription(params: IPurchaseSubscriptionRepository.FindBySubscription.Params):
    IPurchaseSubscriptionRepository.FindBySubscription.Response {

    const deleteCustomerSubscription = await database.product.findFirst({
      where: {
        productId: params.subscriptionId,
      },
    })

    return deleteCustomerSubscription;
  }

  public async updateSubscription(params: IPurchaseSubscriptionRepository.UpdateSubscription.Params):
    IPurchaseSubscriptionRepository.UpdateSubscription.Response {

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
    params: IPurchaseSubscriptionRepository.UpdateCustomer.Params
  ): IPurchaseSubscriptionRepository.UpdateCustomer.Response {

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