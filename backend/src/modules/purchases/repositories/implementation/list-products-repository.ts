import { ProductType } from "@/src/shared/application/entities/product";
import { PrismaClient } from "@prisma/client";
import { IListProductsRepository } from "../i-list-products-repository"

const database = new PrismaClient();


export class ListProductsRepository
  implements IListProductsRepository.Implementation {
  public async list(params: IListProductsRepository.List.Params):
    IListProductsRepository.List.Response {

    const deleteCustomerSubscription = await database.product.findMany({
      where: {
        type: ProductType.product,
      },
    })

    return deleteCustomerSubscription;
  }
};