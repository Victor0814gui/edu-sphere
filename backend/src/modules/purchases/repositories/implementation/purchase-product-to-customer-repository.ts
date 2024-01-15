import { PrismaClient } from "@prisma/client";
import { IPurchaseProductToCustomerRepository } from "../i-purchase-product-to-customer-repository";



const database = new PrismaClient();


export class PurchaseProductToCustomerRepository
  implements IPurchaseProductToCustomerRepository.Implementation {

  public async findCustomer(props: IPurchaseProductToCustomerRepository.FindCustomer.Params):
    IPurchaseProductToCustomerRepository.FindCustomer.Response {

    const findProductResponse = await database.user.findUnique({
      where: {
        id: props.customerId,
      }
    })

    return findProductResponse;
  };

  public async transaction(params: IPurchaseProductToCustomerRepository.Transaction.Params):
    IPurchaseProductToCustomerRepository.Transaction.Response {

    const findProductResponse = await database.transaction.create({
      data: params,
    })

    return findProductResponse;
  };

  public async purchase(props: IPurchaseProductToCustomerRepository.Purchase.Params):
    IPurchaseProductToCustomerRepository.Purchase.Response {

    const purchaseProductResponse = await database.product.update({
      where: {
        priceId: props.productId,
      },
      data: {
        users: {
          connect: [{
            id: props.customerId,
          }]
        }
      }
    })

    return purchaseProductResponse;
  };

  public async findProduct(props: IPurchaseProductToCustomerRepository.FindProduct.Params):
    IPurchaseProductToCustomerRepository.FindProduct.Response {

    const findProductResponse = await database.product.findUnique({
      where: {
        priceId: props.productId,
      },
    })


    return findProductResponse;
  };
}