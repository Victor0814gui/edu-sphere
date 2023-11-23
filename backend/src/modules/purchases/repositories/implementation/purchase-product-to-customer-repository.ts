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

    const purchaseProductResponse = await database.user.update({
      where: {
        id: props.customerId,
      },
      data: {
        subscription: {
          connect: [{ id: props.productId }]
        }
      }
    })

    return purchaseProductResponse;
  };

  public async findProduct(props: IPurchaseProductToCustomerRepository.FindProduct.Params):
    IPurchaseProductToCustomerRepository.FindProduct.Response {

    const findProductResponse = await database.product.findUnique({
      where: {
        id: props.productId,
      },
    })


    return findProductResponse;
  };
}