import { ProductType } from "@/src/shared/application/entities/product";
import { PrismaClient } from "@prisma/client";
import { IListProductsRepository } from "../i-list-products-repository"
import { ProductTypeEnum } from "@/src/shared/application/entities/enums/i-product-type";

const database = new PrismaClient();


export class ListProductsRepository
  implements IListProductsRepository.Implementation {
  public async list(params: IListProductsRepository.List.Params):
    IListProductsRepository.List.Response {

    const deleteCustomerSubscription = await database.product.findMany({
      where: {
        type: ProductTypeEnum.product,
      },
    })

    return deleteCustomerSubscription;
  }
};