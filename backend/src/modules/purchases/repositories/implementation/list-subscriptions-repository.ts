import { ProductType } from "@/src/shared/application/entities/product";
import { PrismaClient } from "@prisma/client";
import { IListSubscriptionsRepository } from "../i-list-subscriptions-repository"
import { ProductTypeEnum } from "@/src/shared/application/entities/enums/i-product-type";


const database = new PrismaClient();


export class ListSubscriptionsRepository
  implements IListSubscriptionsRepository.Implementation {

  public async list(params: IListSubscriptionsRepository.List.Params):
    IListSubscriptionsRepository.List.Response {

    const deleteCustomerSubscription = await database.product.findMany({
      where: {
        type: ProductTypeEnum.subscription,
      },
    })

    return deleteCustomerSubscription;
  }

};